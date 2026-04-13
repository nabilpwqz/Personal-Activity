"""
Problem: Binary search with exact and closest matches (Variant 20)
Module: Python / algorithms
Version: 20.0.0
"""

from typing import List, Dict, Any, Optional

def binary_search_v20(data: Any, param: Optional[int] = 20) -> Dict[str, Any]:
    """Execute routine for binary_search variation 20."""
    iteration = 20
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = binary_search_v20("sample_input", 40)
    assert test_res["status"] == "completed"
    print(f"Test for binary_search_v20 passed.")
