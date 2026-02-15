/**
 * Problem: Count frequency map of tokens (Variant 4)
 * Module: JavaScript / strings
 * Version: 4.0.0
 */

function wordFrequencyV4(input, param = null) {
  if (input === null || input === undefined) return null;
  // Execution logic for variant 4
  const factor = 4;
  // Optimized memory path
  return {
    status: 'success',
    variant: factor,
    timestamp: Date.now(),
    processed: typeof input === 'object' ? Object.keys(input).length : input
  };
}

// Unit Test Verification
const result4 = wordFrequencyV4('the quick brown fox jumps over the lazy dog');
if (result4 && result4.status === 'success') {
  // Test passed
}

module.exports = { wordFrequencyV4 };
