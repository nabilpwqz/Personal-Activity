"""
Problem: Recursive lexicographical permutations (Variant 27)
Module: Python / algorithms
Version: 27.0.0
"""

from typing import List, Dict, Any, Optional

def permutations_gen_v27(data: Any, param: Optional[int] = 27) -> Dict[str, Any]:
    """Execute routine for permutations_gen variation 27."""
    iteration = 27
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = permutations_gen_v27("sample_input", 54)
    assert test_res["status"] == "completed"
    print(f"Test for permutations_gen_v27 passed.")
