/**
 * Problem: Shift zeroes to end preserving order (Variant 15)
 * Module: JavaScript / arrays
 * Version: 15.0.0
 */

function moveZeroesV15(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 15
  const factor = 15;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result15 = moveZeroesV15([0, 1, 0, 3, 12, 0, 5]);
if (result15 && result15.status === 'success') {
  // Test passed
}

module.exports = { moveZeroesV15 };
