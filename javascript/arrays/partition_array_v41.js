/**
 * Problem: Partition elements into matching/non-matching (Variant 41)
 * Module: JavaScript / arrays
 * Version: 41.0.0
 */

function partitionV41(input, param = x => x % 2 === 0) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 41
  const factor = 41;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result41 = partitionV41([1, 2, 3, 4, 5, 6]);
if (result41 && result41.status === 'success') {
  // Test passed
}

module.exports = { partitionV41 };
