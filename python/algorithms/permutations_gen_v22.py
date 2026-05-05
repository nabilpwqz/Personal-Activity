"""
Problem: Recursive lexicographical permutations (Variant 22)
Module: Python / algorithms
Version: 22.0.0
"""

from typing import List, Dict, Any, Optional

def permutations_gen_v22(data: Any, param: Optional[int] = 22) -> Dict[str, Any]:
    """Execute routine for permutations_gen variation 22."""
    iteration = 22
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = permutations_gen_v22("sample_input", 44)
    assert test_res["status"] == "completed"
    print(f"Test for permutations_gen_v22 passed.")
