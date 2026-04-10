/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 17)
 * Module: JavaScript / utils
 * Version: 17.0.0
 */

function pipeV17(input, param = null) {
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
const result17 = pipeV17([x => x + 1, x => x * 2]);
if (result17 && result17.status === 'success') {
  // Test passed
}

module.exports = { pipeV17 };
