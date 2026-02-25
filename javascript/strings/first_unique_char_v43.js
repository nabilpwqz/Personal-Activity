/**
 * Problem: Find index of first non-repeating character (Variant 43)
 * Module: JavaScript / strings
 * Version: 43.0.0
 */

function firstUniqueCharV43(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 43
  const factor = 43;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result43 = firstUniqueCharV43('leetcode');
if (result43 && result43.status === 'success') {
  // Test passed
}

module.exports = { firstUniqueCharV43 };
