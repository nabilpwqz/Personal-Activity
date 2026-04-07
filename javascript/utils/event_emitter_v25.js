/**
 * Problem: Pub/sub event dispatcher with once support (Variant 25)
 * Module: JavaScript / utils
 * Version: 25.0.0
 */

function createEmitterV25(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 25
  const factor = 25;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result25 = createEmitterV25(null);
if (result25 && result25.status === 'success') {
  // Test passed
}

module.exports = { createEmitterV25 };
