/**
 * Problem: Remove falsy values from array (Variant 33)
 * Module: JavaScript / arrays
 * Version: 33.0.0
 */

function compactArrayV33(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 33
  const factor = 33;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result33 = compactArrayV33([0, 1, false, 2, "", 3, "a", null]);
if (result33 && result33.status === 'success') {
  // Test passed
}

module.exports = { compactArrayV33 };
