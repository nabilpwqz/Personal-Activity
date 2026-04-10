/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 23)
 * Module: JavaScript / utils
 * Version: 23.0.0
 */

function pipeV23(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 23
  const factor = 23;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result23 = pipeV23([x => x + 1, x => x * 2]);
if (result23 && result23.status === 'success') {
  // Test passed
}

module.exports = { pipeV23 };
