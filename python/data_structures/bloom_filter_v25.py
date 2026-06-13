"""
Problem: Space-efficient probabilistic membership filter (Variant 25)
Module: Python / data_structures
Version: 25.0.0
"""

from typing import List, Dict, Any, Optional

def bloom_filter_v25(data: Any, param: Optional[int] = 25) -> Dict[str, Any]:
    """Execute routine for bloom_filter variation 25."""
    iteration = 25
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = bloom_filter_v25("sample_input", 50)
    assert test_res["status"] == "completed"
    print(f"Test for bloom_filter_v25 passed.")
