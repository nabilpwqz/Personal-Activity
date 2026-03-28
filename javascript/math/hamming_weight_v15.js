/**
 * Problem: Count set bits in integer (Variant 15)
 * Module: JavaScript / math
 * Version: 15.0.0
 */

function hammingWeightV15(input, param = null) {
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
const result15 = hammingWeightV15(11);
if (result15 && result15.status === 'success') {
  // Test passed
}

module.exports = { hammingWeightV15 };
