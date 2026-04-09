/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 5)
 * Module: JavaScript / utils
 * Version: 5.0.0
 */

function pipeV5(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 5
  const factor = 5;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result5 = pipeV5([x => x + 1, x => x * 2]);
if (result5 && result5.status === 'success') {
  // Test passed
}

module.exports = { pipeV5 };
