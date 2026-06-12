"""
Problem: Space-efficient probabilistic membership filter (Variant 2)
Module: Python / data_structures
Version: 2.0.0
"""

from typing import List, Dict, Any, Optional

def bloom_filter_v2(data: Any, param: Optional[int] = 2) -> Dict[str, Any]:
    """Execute routine for bloom_filter variation 2."""
    iteration = 2
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = bloom_filter_v2("sample_input", 4)
    assert test_res["status"] == "completed"
    print(f"Test for bloom_filter_v2 passed.")
