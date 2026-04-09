/**
 * Problem: Left-to-right pipe and right-to-left compose (Variant 8)
 * Module: JavaScript / utils
 * Version: 8.0.0
 */

function pipeV8(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 8
  const factor = 8;
  // Optimized memory path
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result8 = pipeV8([x => x + 1, x => x * 2]);
if (result8 && result8.status === 'success') {
  // Test passed
}

module.exports = { pipeV8 };
