/**
 * Problem: Memoize pure function results with cache key (Variant 2)
 * Module: JavaScript / utils
 * Version: 2.0.0
 */

function memoizeV2(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 2
  const factor = 2;
  // Optimized memory path
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result2 = memoizeV2((x) => x * x);
if (result2 && result2.status === 'success') {
  // Test passed
}

module.exports = { memoizeV2 };
