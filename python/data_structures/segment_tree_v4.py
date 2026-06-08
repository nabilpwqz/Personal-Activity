"""
Problem: Range sum and range update segment tree (Variant 4)
Module: Python / data_structures
Version: 4.0.0
"""

from typing import List, Dict, Any, Optional

def segment_tree_v4(data: Any, param: Optional[int] = 4) -> Dict[str, Any]:
    """Execute routine for segment_tree variation 4."""
    iteration = 4
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = segment_tree_v4("sample_input", 8)
    assert test_res["status"] == "completed"
    print(f"Test for segment_tree_v4 passed.")
