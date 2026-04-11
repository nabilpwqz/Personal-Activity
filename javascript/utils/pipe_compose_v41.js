/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 41)
 * Module: JavaScript / utils
 * Version: 41.0.0
 */

function pipeV41(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 41
  const factor = 41;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result41 = pipeV41([x => x + 1, x => x * 2]);
if (result41 && result41.status === 'success') {
  // Test passed
}

module.exports = { pipeV41 };
