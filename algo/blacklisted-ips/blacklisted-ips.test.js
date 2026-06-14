import { processRequests } from './blacklisted-ips.js';

describe('processRequests - Blacklisted IPs', () => {
  describe('regex matching', () => {
    it('blocks IPs matching blacklisted regex patterns', () => {
      const blacklisted = ['*.123.*'];
      const requests = ['12.1.123.45', '1.123.435.12', '1.2.3.4'];
      expect(processRequests(blacklisted, requests)).toEqual([1, 1, 0]);
    });

    it('handles exact IP match', () => {
      const blacklisted = ['192.168.1.1'];
      const requests = ['192.168.1.1', '192.168.1.2'];
      expect(processRequests(blacklisted, requests)).toEqual([1, 0]);
    });

    it('handles wildcard at start', () => {
      const blacklisted = ['*.1.2.3'];
      const requests = ['10.1.2.3', '999.1.2.3', '1.2.3.4'];
      expect(processRequests(blacklisted, requests)).toEqual([1, 1, 0]);
    });

    it('handles wildcard at end', () => {
      const blacklisted = ['192.168.*'];
      const requests = ['192.168.1.1', '192.168.0.0', '192.169.1.1'];
      expect(processRequests(blacklisted, requests)).toEqual([1, 1, 0]);
    });

    it('handles multiple wildcards', () => {
      const blacklisted = ['1.*.3.*'];
      const requests = ['1.2.3.4', '1.999.3.0', '2.2.3.4'];
      expect(processRequests(blacklisted, requests)).toEqual([1, 1, 0]);
    });

    it('handles multiple blacklist patterns', () => {
      const blacklisted = ['*.123.*', '192.168.*'];
      const requests = ['1.123.4.5', '192.168.1.1', '10.10.10.10'];
      expect(processRequests(blacklisted, requests)).toEqual([1, 1, 0]);
    });
  });

  describe('rate limiting', () => {
    it('blocks IP after 2 unblocked requests within 5 seconds', () => {
      const blacklisted = [];
      const requests = [
        '1.2.3.4', // t=0, unblocked
        '1.2.3.4', // t=1, unblocked (2nd unblocked in last 5s)
        '1.2.3.4', // t=2, blocked (3rd request, 2 unblocked in last 5s)
      ];
      expect(processRequests(blacklisted, requests)).toEqual([0, 0, 1]);
    });

    it('only counts unblocked requests for rate limiting', () => {
      const blacklisted = ['*.2.3.4'];
      const requests = [
        '1.2.3.4', // t=0, blocked by regex
        '1.2.3.4', // t=1, blocked by regex
        '1.2.3.4', // t=2, blocked by regex (not counted for rate limit)
        '5.6.7.8', // t=3, unblocked
        '5.6.7.8', // t=4, unblocked (2nd unblocked in last 5s)
        '5.6.7.8', // t=5, blocked (rate limit)
      ];
      expect(processRequests(blacklisted, requests)).toEqual([1, 1, 1, 0, 0, 1]);
    });

    it('resets rate limit window after 5 seconds', () => {
      const blacklisted = [];
      const requests = [
        '1.2.3.4', // t=0, unblocked
        '1.2.3.4', // t=1, unblocked
        '1.2.3.4', // t=2, blocked
        '1.2.3.4', // t=3, blocked
        '1.2.3.4', // t=4, blocked
        '1.2.3.4', // t=5, unblocked (outside 5s window)
        '1.2.3.4', // t=6, unblocked (2nd in new window)
        '1.2.3.4', // t=7, blocked (3rd, 2 unblocked in last 5s)
        '1.2.3.4', // t=8, blocked 
      ];
      expect(processRequests(blacklisted, requests)).toEqual([0, 0, 1, 1, 1, 0, 0, 1, 1]);
    });

    it('handles rate limiting with multiple IPs', () => {
      const blacklisted = [];
      const requests = [
        '1.2.3.4', // t=0, unblocked
        '5.6.7.8', // t=1, unblocked
        '1.2.3.4', // t=2, unblocked (2nd for 1.2.3.4)
        '5.6.7.8', // t=3, unblocked (2nd for 5.6.7.8)
        '1.2.3.4', // t=4, blocked (rate limit for 1.2.3.4)
        '5.6.7.8', // t=5, blocked (rate limit for 5.6.7.8)
      ];
      expect(processRequests(blacklisted, requests)).toEqual([0, 0, 0, 0, 1, 1]);
    });
  });

  describe('combined blocking conditions', () => {
    it('blocks if either regex or rate limit applies', () => {
      const blacklisted = ['*.123.*'];
      const requests = [
        '1.123.4.5', // t=0, blocked by regex
        '10.10.10.10', // t=1, unblocked
        '10.10.10.10', // t=2, unblocked (2nd)
        '10.10.10.10', // t=3, blocked by rate limit
        '1.123.4.5', // t=4, blocked by regex
      ];
      expect(processRequests(blacklisted, requests)).toEqual([1, 0, 0, 1, 1]);
    });

    it('rate limit only applies to unblocked requests', () => {
      const blacklisted = ['*.123.*'];
      const requests = [
        '1.123.4.5', // t=0, blocked by regex (not counted)
        '10.10.10.10', // t=1, unblocked
        '1.123.4.5', // t=2, blocked by regex (not counted)
        '10.10.10.10', // t=3, unblocked (2nd unblocked)
        '10.10.10.10', // t=4, blocked by rate limit
      ];
      expect(processRequests(blacklisted, requests)).toEqual([1, 0, 1, 0, 1]);
    });
  });

  describe('edge cases', () => {
    it('handles empty blacklist', () => {
      const blacklisted = [];
      const requests = ['1.2.3.4', '5.6.7.8'];
      expect(processRequests(blacklisted, requests)).toEqual([0, 0]);
    });

    it('handles empty requests', () => {
      const blacklisted = ['*.123.*'];
      const requests = [];
      expect(processRequests(blacklisted, requests)).toEqual([]);
    });

    it('handles single request', () => {
      const blacklisted = ['1.2.3.4'];
      const requests = ['1.2.3.4'];
      expect(processRequests(blacklisted, requests)).toEqual([1]);
    });
  });
});
