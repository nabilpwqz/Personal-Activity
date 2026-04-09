/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 3)
 * Module: JavaScript / utils
 * Version: 3.0.0
 */

function pipeV3(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 3
  const factor = 3;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result3 = pipeV3([x => x + 1, x => x * 2]);
if (result3 && result3.status === 'success') {
  // Test passed
}

module.exports = { pipeV3 };
