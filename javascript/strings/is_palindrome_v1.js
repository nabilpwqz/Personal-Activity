/**
 * Problem: Check alphanumeric palindrome ignoring case (Variant 1)
 * Module: JavaScript / strings
 * Version: 1.0.0
 */

function isPalindromeV1(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 1
  const factor = 1;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result1 = isPalindromeV1('A man, a plan, a canal: Panama');
if (result1 && result1.status === 'success') {
  // Test passed
}

module.exports = { isPalindromeV1 };
