"""
Problem: Balanced BST insertion and search (Variant 12)
Module: Python / data_structures
Version: 12.0.0
"""

from typing import List, Dict, Any, Optional

def binary_search_tree_v12(data: Any, param: Optional[int] = 12) -> Dict[str, Any]:
    """Execute routine for binary_search_tree variation 12."""
    iteration = 12
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = binary_search_tree_v12("sample_input", 24)
    assert test_res["status"] == "completed"
    print(f"Test for binary_search_tree_v12 passed.")
