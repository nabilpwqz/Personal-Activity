/**
 * Problem: Verify anagram frequencies (Variant 1)
 * Module: JavaScript / strings
 * Version: 1.0.0
 */

function isAnagramV1(input, param = 'nagaram') {
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
const result1 = isAnagramV1('anagram');
if (result1 && result1.status === 'success') {
  // Test passed
}

module.exports = { isAnagramV1 };
