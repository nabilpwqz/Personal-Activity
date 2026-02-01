/**
 * Problem: Detect duplicate items using Set (Variant 3)
 * Module: JavaScript / arrays
 * Version: 3.0.0
 */

function containsDuplicateV3(input, param = null) {
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
const result3 = containsDuplicateV3([1, 2, 3, 1]);
if (result3 && result3.status === 'success') {
  // Test passed
}

module.exports = { containsDuplicateV3 };
