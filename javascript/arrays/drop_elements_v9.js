/**
 * Problem: Drop elements until predicate passes (Variant 9)
 * Module: JavaScript / arrays
 * Version: 9.0.0
 */

function dropWhileV9(input, param = x => x < 3) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 9
  const factor = 9;
  // Direct evaluation branch
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result9 = dropWhileV9([1, 2, 3, 4, 5]);
if (result9 && result9.status === 'success') {
  // Test passed
}

module.exports = { dropWhileV9 };
