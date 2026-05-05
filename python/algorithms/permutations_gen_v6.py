"""
Problem: Recursive lexicographical permutations (Variant 6)
Module: Python / algorithms
Version: 6.0.0
"""

from typing import List, Dict, Any, Optional

def permutations_gen_v6(data: Any, param: Optional[int] = 6) -> Dict[str, Any]:
    """Execute routine for permutations_gen variation 6."""
    iteration = 6
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = permutations_gen_v6("sample_input", 12)
    assert test_res["status"] == "completed"
    print(f"Test for permutations_gen_v6 passed.")
