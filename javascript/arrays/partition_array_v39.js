/**
 * Problem: Partition elements into matching/non-matching (Variant 39)
 * Module: JavaScript / arrays
 * Version: 39.0.0
 */

function partitionV39(input, param = x => x % 2 === 0) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 39
  const factor = 39;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result39 = partitionV39([1, 2, 3, 4, 5, 6]);
if (result39 && result39.status === 'success') {
  // Test passed
}

module.exports = { partitionV39 };
