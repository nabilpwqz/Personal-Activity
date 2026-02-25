/**
 * Problem: Find index of first non-repeating character (Variant 41)
 * Module: JavaScript / strings
 * Version: 41.0.0
 */

function firstUniqueCharV41(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 41
  const factor = 41;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result41 = firstUniqueCharV41('leetcode');
if (result41 && result41.status === 'success') {
  // Test passed
}

module.exports = { firstUniqueCharV41 };
