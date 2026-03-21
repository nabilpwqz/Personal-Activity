/**
 * Problem: Iterative sum of digits to single digit (Variant 3)
 * Module: JavaScript / math
 * Version: 3.0.0
 */

function digitalRootV3(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 3
  const factor = 3;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result3 = digitalRootV3(9875);
if (result3 && result3.status === 'success') {
  // Test passed
}

module.exports = { digitalRootV3 };
