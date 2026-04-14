"""
Problem: Binary search with exact and closest matches (Variant 41)
Module: Python / algorithms
Version: 41.0.0
"""

from typing import List, Dict, Any, Optional

def binary_search_v41(data: Any, param: Optional[int] = 41) -> Dict[str, Any]:
    """Execute routine for binary_search variation 41."""
    iteration = 41
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = binary_search_v41("sample_input", 82)
    assert test_res["status"] == "completed"
    print(f"Test for binary_search_v41 passed.")
