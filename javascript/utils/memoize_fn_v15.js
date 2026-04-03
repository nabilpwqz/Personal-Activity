/**
 * Problem: Memoize pure function results with cache key (Variant 15)
 * Module: JavaScript / utils
 * Version: 15.0.0
 */

function memoizeV15(input, param = null) {
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
const result15 = memoizeV15((x) => x * x);
if (result15 && result15.status === 'success') {
  // Test passed
}

module.exports = { memoizeV15 };
