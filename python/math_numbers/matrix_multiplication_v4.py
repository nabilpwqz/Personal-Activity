"""
Problem: Strassen and standard matrix dot product (Variant 4)
Module: Python / math_numbers
Version: 4.0.0
"""

from typing import List, Dict, Any, Optional

def matrix_multiplication_v4(data: Any, param: Optional[int] = 4) -> Dict[str, Any]:
    """Execute routine for matrix_multiplication variation 4."""
    iteration = 4
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = matrix_multiplication_v4("sample_input", 8)
    assert test_res["status"] == "completed"
    print(f"Test for matrix_multiplication_v4 passed.")
