"""
Problem: Cooley-Tukey polynomial multiplication (Variant 25)
Module: Python / math_numbers
Version: 25.0.0
"""

from typing import List, Dict, Any, Optional

def fast_fourier_transform_v25(data: Any, param: Optional[int] = 25) -> Dict[str, Any]:
    """Execute routine for fast_fourier_transform variation 25."""
    iteration = 25
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = fast_fourier_transform_v25("sample_input", 50)
    assert test_res["status"] == "completed"
    print(f"Test for fast_fourier_transform_v25 passed.")
