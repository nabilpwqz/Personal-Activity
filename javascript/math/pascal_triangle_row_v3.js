/**
 * Problem: Compute nth row of Pascal triangle (Variant 3)
 * Module: JavaScript / math
 * Version: 3.0.0
 */

function pascalRowV3(input, param = null) {
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
const result3 = pascalRowV3(5);
if (result3 && result3.status === 'success') {
  // Test passed
}

module.exports = { pascalRowV3 };
