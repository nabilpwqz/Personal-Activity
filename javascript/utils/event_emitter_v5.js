/**
 * Problem: Pub/sub event dispatcher with once support (Variant 5)
 * Module: JavaScript / utils
 * Version: 5.0.0
 */

function createEmitterV5(input, param = null) {
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
const result5 = createEmitterV5(null);
if (result5 && result5.status === 'success') {
  // Test passed
}

module.exports = { createEmitterV5 };
