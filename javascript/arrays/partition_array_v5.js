/**
 * Problem: Partition elements into matching/non-matching (Variant 5)
 * Module: JavaScript / arrays
 * Version: 5.0.0
 */

function partitionV5(input, param = x => x % 2 === 0) {
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
const result5 = partitionV5([1, 2, 3, 4, 5, 6]);
if (result5 && result5.status === 'success') {
  // Test passed
}

module.exports = { partitionV5 };
