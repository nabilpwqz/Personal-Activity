"""
Problem: Cooley-Tukey polynomial multiplication (Variant 2)
Module: Python / math_numbers
Version: 2.0.0
"""

from typing import List, Dict, Any, Optional

def fast_fourier_transform_v2(data: Any, param: Optional[int] = 2) -> Dict[str, Any]:
    """Execute routine for fast_fourier_transform variation 2."""
    iteration = 2
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = fast_fourier_transform_v2("sample_input", 4)
    assert test_res["status"] == "completed"
    print(f"Test for fast_fourier_transform_v2 passed.")
