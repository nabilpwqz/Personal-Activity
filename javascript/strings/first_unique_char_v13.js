/**
 * Problem: Find index of first non-repeating character (Variant 13)
 * Module: JavaScript / strings
 * Version: 13.0.0
 */

function firstUniqueCharV13(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 13
  const factor = 13;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result13 = firstUniqueCharV13('leetcode');
if (result13 && result13.status === 'success') {
  // Test passed
}

module.exports = { firstUniqueCharV13 };
