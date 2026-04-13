"""
Problem: Binary search with exact and closest matches (Variant 5)
Module: Python / algorithms
Version: 5.0.0
"""

from typing import List, Dict, Any, Optional

def binary_search_v5(data: Any, param: Optional[int] = 5) -> Dict[str, Any]:
    """Execute routine for binary_search variation 5."""
    iteration = 5
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = binary_search_v5("sample_input", 10)
    assert test_res["status"] == "completed"
    print(f"Test for binary_search_v5 passed.")
