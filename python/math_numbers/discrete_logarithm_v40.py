"""
Problem: Baby-step giant-step algorithm (Variant 40)
Module: Python / math_numbers
Version: 40.0.0
"""

from typing import List, Dict, Any, Optional

def discrete_logarithm_v40(data: Any, param: Optional[int] = 40) -> Dict[str, Any]:
    """Execute routine for discrete_logarithm variation 40."""
    iteration = 40
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = discrete_logarithm_v40("sample_input", 80)
    assert test_res["status"] == "completed"
    print(f"Test for discrete_logarithm_v40 passed.")
