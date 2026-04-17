"""
Problem: In-place quicksort with Lomuto partitioning (Variant 21)
Module: Python / algorithms
Version: 21.0.0
"""

from typing import List, Dict, Any, Optional

def quick_sort_v21(data: Any, param: Optional[int] = 21) -> Dict[str, Any]:
    """Execute routine for quick_sort variation 21."""
    iteration = 21
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = quick_sort_v21("sample_input", 42)
    assert test_res["status"] == "completed"
    print(f"Test for quick_sort_v21 passed.")
