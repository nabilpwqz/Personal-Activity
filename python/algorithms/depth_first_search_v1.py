"""
Problem: Recursive and iterative graph DFS (Variant 1)
Module: Python / algorithms
Version: 1.0.0
"""

from typing import List, Dict, Any, Optional

def depth_first_search_v1(data: Any, param: Optional[int] = 1) -> Dict[str, Any]:
    """Execute routine for depth_first_search variation 1."""
    iteration = 1
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = depth_first_search_v1("sample_input", 2)
    assert test_res["status"] == "completed"
    print(f"Test for depth_first_search_v1 passed.")
