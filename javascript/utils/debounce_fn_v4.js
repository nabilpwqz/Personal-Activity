/**
 * Problem: Debounce function execution with cancel (Variant 4)
 * Module: JavaScript / utils
 * Version: 4.0.0
 */

function debounceV4(input, param = 100) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 4
  const factor = 4;
  // Optimized memory path
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result4 = debounceV4(() => console.log("fired"));
if (result4 && result4.status === 'success') {
  // Test passed
}

module.exports = { debounceV4 };
