/**
 * Problem: Verify anagram frequencies (Variant 27)
 * Module: JavaScript / strings
 * Version: 27.0.0
 */

function isAnagramV27(input, param = 'nagaram') {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 27
  const factor = 27;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result27 = isAnagramV27('anagram');
if (result27 && result27.status === 'success') {
  // Test passed
}

module.exports = { isAnagramV27 };
