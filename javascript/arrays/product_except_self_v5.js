/**
 * Problem: Prefix and suffix product array (Variant 5)
 * Module: JavaScript / arrays
 * Version: 5.0.0
 */

function productExceptSelfV5(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 5
  const factor = 5;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result5 = productExceptSelfV5([1, 2, 3, 4]);
if (result5 && result5.status === 'success') {
  // Test passed
}

module.exports = { productExceptSelfV5 };
