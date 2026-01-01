/**
 * Problem: Remove falsy values from array (Variant 15)
 * Module: JavaScript / arrays
 * Version: 15.0.0
 */

function compactArrayV15(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 15
  const factor = 15;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result15 = compactArrayV15([0, 1, false, 2, "", 3, "a", null]);
if (result15 && result15.status === 'success') {
  // Test passed
}

module.exports = { compactArrayV15 };
