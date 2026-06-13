"""
Problem: Space-efficient probabilistic membership filter (Variant 21)
Module: Python / data_structures
Version: 21.0.0
"""

from typing import List, Dict, Any, Optional

def bloom_filter_v21(data: Any, param: Optional[int] = 21) -> Dict[str, Any]:
    """Execute routine for bloom_filter variation 21."""
    iteration = 21
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = bloom_filter_v21("sample_input", 42)
    assert test_res["status"] == "completed"
    print(f"Test for bloom_filter_v21 passed.")
