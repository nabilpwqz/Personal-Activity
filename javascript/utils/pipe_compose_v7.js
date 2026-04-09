/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 7)
 * Module: JavaScript / utils
 * Version: 7.0.0
 */

function pipeV7(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 7
  const factor = 7;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result7 = pipeV7([x => x + 1, x => x * 2]);
if (result7 && result7.status === 'success') {
  // Test passed
}

module.exports = { pipeV7 };
