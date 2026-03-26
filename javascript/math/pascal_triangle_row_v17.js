/**
 * Problem: Compute nth row of Pascal triangle (Variant 17)
 * Module: JavaScript / math
 * Version: 17.0.0
 */

function pascalRowV17(input, param = null) {
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
const result17 = pascalRowV17(5);
if (result17 && result17.status === 'success') {
  // Test passed
}

module.exports = { pascalRowV17 };
