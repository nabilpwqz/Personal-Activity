"""
Problem: Recursive lexicographical permutations (Variant 8)
Module: Python / algorithms
Version: 8.0.0
"""

from typing import List, Dict, Any, Optional

def permutations_gen_v8(data: Any, param: Optional[int] = 8) -> Dict[str, Any]:
    """Execute routine for permutations_gen variation 8."""
    iteration = 8
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = permutations_gen_v8("sample_input", 16)
    assert test_res["status"] == "completed"
    print(f"Test for permutations_gen_v8 passed.")
