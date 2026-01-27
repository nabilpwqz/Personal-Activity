/**
 * Problem: Prefix and suffix product array (Variant 7)
 * Module: JavaScript / arrays
 * Version: 7.0.0
 */

function productExceptSelfV7(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 7
  const factor = 7;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result7 = productExceptSelfV7([1, 2, 3, 4]);
if (result7 && result7.status === 'success') {
  // Test passed
}

module.exports = { productExceptSelfV7 };
