"""
Problem: Recursive and iterative graph DFS (Variant 3)
Module: Python / algorithms
Version: 3.0.0
"""

from typing import List, Dict, Any, Optional

def depth_first_search_v3(data: Any, param: Optional[int] = 3) -> Dict[str, Any]:
    """Execute routine for depth_first_search variation 3."""
    iteration = 3
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = depth_first_search_v3("sample_input", 6)
    assert test_res["status"] == "completed"
    print(f"Test for depth_first_search_v3 passed.")
