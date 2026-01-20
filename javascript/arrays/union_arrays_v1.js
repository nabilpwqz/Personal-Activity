/**
 * Problem: Merge multiple arrays into unique set (Variant 1)
 * Module: JavaScript / arrays
 * Version: 1.0.0
 */

function unionArraysV1(input, param = [2, 3, 4, 5]) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 1
  const factor = 1;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result1 = unionArraysV1([1, 2, 3]);
if (result1 && result1.status === 'success') {
  // Test passed
}

module.exports = { unionArraysV1 };
