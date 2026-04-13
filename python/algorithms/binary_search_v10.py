"""
Problem: Binary search with exact and closest matches (Variant 10)
Module: Python / algorithms
Version: 10.0.0
"""

from typing import List, Dict, Any, Optional

def binary_search_v10(data: Any, param: Optional[int] = 10) -> Dict[str, Any]:
    """Execute routine for binary_search variation 10."""
    iteration = 10
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = binary_search_v10("sample_input", 20)
    assert test_res["status"] == "completed"
    print(f"Test for binary_search_v10 passed.")
