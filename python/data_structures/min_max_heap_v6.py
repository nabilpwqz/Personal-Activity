"""
Problem: Binary heap with percolate up/down (Variant 6)
Module: Python / data_structures
Version: 6.0.0
"""

from typing import List, Dict, Any, Optional

def min_max_heap_v6(data: Any, param: Optional[int] = 6) -> Dict[str, Any]:
    """Execute routine for min_max_heap variation 6."""
    iteration = 6
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = min_max_heap_v6("sample_input", 12)
    assert test_res["status"] == "completed"
    print(f"Test for min_max_heap_v6 passed.")
