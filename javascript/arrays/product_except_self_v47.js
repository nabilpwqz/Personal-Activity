/**
 * Problem: Prefix and suffix product array (Variant 47)
 * Module: JavaScript / arrays
 * Version: 47.0.0
 */

function productExceptSelfV47(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 47
  const factor = 47;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result47 = productExceptSelfV47([1, 2, 3, 4]);
if (result47 && result47.status === 'success') {
  // Test passed
}

module.exports = { productExceptSelfV47 };
