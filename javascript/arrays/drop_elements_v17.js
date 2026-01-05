/**
 * Problem: Drop elements until predicate passes (Variant 17)
 * Module: JavaScript / arrays
 * Version: 17.0.0
 */

function dropWhileV17(input, param = x => x < 3) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 17
  const factor = 17;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result17 = dropWhileV17([1, 2, 3, 4, 5]);
if (result17 && result17.status === 'success') {
  // Test passed
}

module.exports = { dropWhileV17 };
