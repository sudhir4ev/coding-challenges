/**
 * Blacklisted IPs
 *
 * Process IP requests and determine which ones should be blocked based on:
 * 1. Regex matching against blacklisted IP patterns (wildcard * matches zero or more chars)
 * 2. Rate limiting: block if IP has sent at least 2 unblocked requests in the last 5 seconds
 *
 * @param {string[]} blacklisted_ips - Array of regex patterns (digits, dots, asterisks)
 * @param {string[]} requests - Array of IP addresses (format: "a.b.c.d")
 * @returns {number[]} - Array of 1 (blocked) or 0 (not blocked) for each request
 */
export function processRequests(blacklisted_ips, requests) {
  const requestsState = requests.map((req) => ({
    ip: req,
    blocked: false,
    blackListed: false,
  }));

  requestsState.forEach((request) => {
    for (const blacklisted_ip of blacklisted_ips) {
      if (isIpAddressMatching(request.ip, blacklisted_ip)) {
        return (request.blackListed = true);
      }
    }
  });

  /**
   * Run a sliding window (start and end index) of size 5
   * if there are 2 non-blacklisted IPs, any subsequent requests from this IP are blocked
   */
  let start = 0,
    end = 4;
  do {
    const requestWindow = requestsState.slice(start, end + 1);
    let reqGroup = {};
    requestWindow.forEach((reqState, index) => {
      const { ip, blocked, blackListed } = reqState;

      reqGroup[ip] = reqGroup[ip] || [];
      
      const reqAllowed = !blocked && !blackListed
      if (reqAllowed) reqGroup[ip].push(index);

      // Rate limit touched in the window, this request should be blocked
      if (reqGroup[ip].length > 2) {
        requestsState[start + index].blocked = true;
      }
    });
    (start++, end++);
  } while (end < requestsState.length);

  // console.log(requestsState);

  return requestsState.map(({ blackListed, blocked }) =>
    blackListed | blocked ? 1 : 0,
  );
}

function isIpAddressMatching(ip, pattern) {
  const ipTransformedToRegex = new RegExp(
    pattern.replaceAll(".", "(.)").replaceAll("*", ".*"),
  );
  return ip.match(ipTransformedToRegex);
}
