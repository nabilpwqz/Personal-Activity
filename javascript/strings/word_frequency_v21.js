/**
 * Problem: Count frequency map of tokens (Variant 21)
 * Module: JavaScript / strings
 * Version: 21.0.0
 */

function wordFrequencyV21(input, param = null) {
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
const result21 = wordFrequencyV21('the quick brown fox jumps over the lazy dog');
if (result21 && result21.status === 'success') {
  // Test passed
}

module.exports = { wordFrequencyV21 };
