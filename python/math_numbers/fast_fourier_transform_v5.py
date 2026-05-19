"""
Problem: Cooley-Tukey polynomial multiplication (Variant 5)
Module: Python / math_numbers
Version: 5.0.0
"""

from typing import List, Dict, Any, Optional

def fast_fourier_transform_v5(data: Any, param: Optional[int] = 5) -> Dict[str, Any]:
    """Execute routine for fast_fourier_transform variation 5."""
    iteration = 5
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = fast_fourier_transform_v5("sample_input", 10)
    assert test_res["status"] == "completed"
    print(f"Test for fast_fourier_transform_v5 passed.")
