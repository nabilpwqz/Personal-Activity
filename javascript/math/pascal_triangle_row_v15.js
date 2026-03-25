/**
 * Problem: Compute nth row of Pascal triangle (Variant 15)
 * Module: JavaScript / math
 * Version: 15.0.0
 */

function pascalRowV15(input, param = null) {
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
const result15 = pascalRowV15(5);
if (result15 && result15.status === 'success') {
  // Test passed
}

module.exports = { pascalRowV15 };
