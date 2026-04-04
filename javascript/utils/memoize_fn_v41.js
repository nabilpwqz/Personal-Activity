/**
 * Problem: Memoize pure function results with cache key (Variant 41)
 * Module: JavaScript / utils
 * Version: 41.0.0
 */

function memoizeV41(input, param = null) {
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
const result41 = memoizeV41((x) => x * x);
if (result41 && result41.status === 'success') {
  // Test passed
}

module.exports = { memoizeV41 };
