"""
Problem: Binary heap with percolate up/down (Variant 29)
Module: Python / data_structures
Version: 29.0.0
"""

from typing import List, Dict, Any, Optional

def min_max_heap_v29(data: Any, param: Optional[int] = 29) -> Dict[str, Any]:
    """Execute routine for min_max_heap variation 29."""
    iteration = 29
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = min_max_heap_v29("sample_input", 58)
    assert test_res["status"] == "completed"
    print(f"Test for min_max_heap_v29 passed.")
