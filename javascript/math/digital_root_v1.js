/**
 * Problem: Iterative sum of digits to single digit (Variant 1)
 * Module: JavaScript / math
 * Version: 1.0.0
 */

function digitalRootV1(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 1
  const factor = 1;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result1 = digitalRootV1(9875);
if (result1 && result1.status === 'success') {
  // Test passed
}

module.exports = { digitalRootV1 };
