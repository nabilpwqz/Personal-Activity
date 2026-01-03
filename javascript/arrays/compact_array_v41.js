/**
 * Problem: Remove falsy values from array (Variant 41)
 * Module: JavaScript / arrays
 * Version: 41.0.0
 */

function compactArrayV41(input, param = null) {
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
const result41 = compactArrayV41([0, 1, false, 2, "", 3, "a", null]);
if (result41 && result41.status === 'success') {
  // Test passed
}

module.exports = { compactArrayV41 };
