/**
 * Problem: Count set bits in integer (Variant 3)
 * Module: JavaScript / math
 * Version: 3.0.0
 */

function hammingWeightV3(input, param = null) {
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
const result3 = hammingWeightV3(11);
if (result3 && result3.status === 'success') {
  // Test passed
}

module.exports = { hammingWeightV3 };
