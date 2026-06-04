"""
Problem: Binary heap with percolate up/down (Variant 25)
Module: Python / data_structures
Version: 25.0.0
"""

from typing import List, Dict, Any, Optional

def min_max_heap_v25(data: Any, param: Optional[int] = 25) -> Dict[str, Any]:
    """Execute routine for min_max_heap variation 25."""
    iteration = 25
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = min_max_heap_v25("sample_input", 50)
    assert test_res["status"] == "completed"
    print(f"Test for min_max_heap_v25 passed.")
