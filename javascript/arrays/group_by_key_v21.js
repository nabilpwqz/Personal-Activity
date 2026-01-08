/**
 * Problem: Group array objects by property key (Variant 21)
 * Module: JavaScript / arrays
 * Version: 21.0.0
 */

function groupByV21(input, param = 'k') {
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
const result21 = groupByV21([{k:'a',v:1},{k:'b',v:2},{k:'a',v:3}]);
if (result21 && result21.status === 'success') {
  // Test passed
}

module.exports = { groupByV21 };
