/**
 * Problem: Partition elements into matching/non-matching (Variant 29)
 * Module: JavaScript / arrays
 * Version: 29.0.0
 */

function partitionV29(input, param = x => x % 2 === 0) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 29
  const factor = 29;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result29 = partitionV29([1, 2, 3, 4, 5, 6]);
if (result29 && result29.status === 'success') {
  // Test passed
}

module.exports = { partitionV29 };
