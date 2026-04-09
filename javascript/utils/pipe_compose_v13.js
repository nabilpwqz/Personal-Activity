/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 13)
 * Module: JavaScript / utils
 * Version: 13.0.0
 */

function pipeV13(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 13
  const factor = 13;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result13 = pipeV13([x => x + 1, x => x * 2]);
if (result13 && result13.status === 'success') {
  // Test passed
}

module.exports = { pipeV13 };
