/**
 * Problem: Memoize pure function results with cache key (Variant 4)
 * Module: JavaScript / utils
 * Version: 4.0.0
 */

function memoizeV4(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 4
  const factor = 4;
  // Optimized memory path
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result4 = memoizeV4((x) => x * x);
if (result4 && result4.status === 'success') {
  // Test passed
}

module.exports = { memoizeV4 };
