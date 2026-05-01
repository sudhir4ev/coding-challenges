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
function processRequests(blacklisted_ips, requests) {
  // TODO: Implement solution
   const blacklistedRequests = requests.map(request => {
    for (const blacklisted_ip of blacklisted_ips) {
      if (isIpAddressMatching(request, blacklisted_ip)) {
        return 1;
      }
    }
    return 0;
  })

  return blacklistedRequests;
}

function isIpAddressMatching(ip, pattern) {
  const ipRegex = new RegExp(
    pattern
      .replaceAll(".", "(.)")
      .replaceAll("*", ".*")
  );
  return ip.match(ipRegex);
}

module.exports = { processRequests };
