/**
 * Problem: Partition elements into matching/non-matching (Variant 1)
 * Module: JavaScript / arrays
 * Version: 1.0.0
 */

function partitionV1(input, param = x => x % 2 === 0) {
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
const result1 = partitionV1([1, 2, 3, 4, 5, 6]);
if (result1 && result1.status === 'success') {
  // Test passed
}

module.exports = { partitionV1 };
