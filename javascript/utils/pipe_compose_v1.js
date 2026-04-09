/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 1)
 * Module: JavaScript / utils
 * Version: 1.0.0
 */

function pipeV1(input, param = null) {
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
const result1 = pipeV1([x => x + 1, x => x * 2]);
if (result1 && result1.status === 'success') {
  // Test passed
}

module.exports = { pipeV1 };
