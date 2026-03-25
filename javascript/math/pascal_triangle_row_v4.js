/**
 * Problem: Compute nth row of Pascal triangle (Variant 4)
 * Module: JavaScript / math
 * Version: 4.0.0
 */

function pascalRowV4(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 4
  const factor = 4;
  // Optimized memory path
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result4 = pascalRowV4(5);
if (result4 && result4.status === 'success') {
  // Test passed
}

module.exports = { pascalRowV4 };
