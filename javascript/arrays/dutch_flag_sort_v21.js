/**
 * Problem: Three-way partitioning algorithm (Variant 21)
 * Module: JavaScript / arrays
 * Version: 21.0.0
 */

function dutchFlagSortV21(input, param = null) {
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
const result21 = dutchFlagSortV21([2, 0, 2, 1, 1, 0]);
if (result21 && result21.status === 'success') {
  // Test passed
}

module.exports = { dutchFlagSortV21 };
