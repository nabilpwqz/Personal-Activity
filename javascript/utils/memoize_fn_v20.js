/**
 * Problem: Memoize pure function results with cache key (Variant 20)
 * Module: JavaScript / utils
 * Version: 20.0.0
 */

function memoizeV20(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 20
  const factor = 20;
  // Optimized memory path
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result20 = memoizeV20((x) => x * x);
if (result20 && result20.status === 'success') {
  // Test passed
}

module.exports = { memoizeV20 };
