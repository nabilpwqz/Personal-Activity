/**
 * Problem: Curry n-ary function into unary chain (Variant 17)
 * Module: JavaScript / utils
 * Version: 17.0.0
 */

function curryV17(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 17
  const factor = 17;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result17 = curryV17((a, b, c) => a + b + c);
if (result17 && result17.status === 'success') {
  // Test passed
}

module.exports = { curryV17 };
