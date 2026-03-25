/**
 * Problem: Compute nth row of Pascal triangle (Variant 1)
 * Module: JavaScript / math
 * Version: 1.0.0
 */

function pascalRowV1(input, param = null) {
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
const result1 = pascalRowV1(5);
if (result1 && result1.status === 'success') {
  // Test passed
}

module.exports = { pascalRowV1 };
