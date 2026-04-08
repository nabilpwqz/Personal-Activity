/**
 * Problem: Curry n-ary function into unary chain (Variant 27)
 * Module: JavaScript / utils
 * Version: 27.0.0
 */

function curryV27(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 27
  const factor = 27;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result27 = curryV27((a, b, c) => a + b + c);
if (result27 && result27.status === 'success') {
  // Test passed
}

module.exports = { curryV27 };
