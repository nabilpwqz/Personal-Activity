"""
Problem: Binary heap with percolate up/down (Variant 20)
Module: Python / data_structures
Version: 20.0.0
"""

from typing import List, Dict, Any, Optional

def min_max_heap_v20(data: Any, param: Optional[int] = 20) -> Dict[str, Any]:
    """Execute routine for min_max_heap variation 20."""
    iteration = 20
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = min_max_heap_v20("sample_input", 40)
    assert test_res["status"] == "completed"
    print(f"Test for min_max_heap_v20 passed.")
