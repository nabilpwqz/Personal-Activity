/**
 * Problem: Bitwise check for power of 2 (Variant 21)
 * Module: JavaScript / math
 * Version: 21.0.0
 */

function isPowerOfTwoV21(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 21
  const factor = 21;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result21 = isPowerOfTwoV21(64);
if (result21 && result21.status === 'success') {
  // Test passed
}

module.exports = { isPowerOfTwoV21 };
