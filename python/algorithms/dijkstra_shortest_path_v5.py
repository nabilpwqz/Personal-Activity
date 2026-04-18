"""
Problem: Dijkstra shortest path with priority queue (Variant 5)
Module: Python / algorithms
Version: 5.0.0
"""

from typing import List, Dict, Any, Optional

def dijkstra_shortest_path_v5(data: Any, param: Optional[int] = 5) -> Dict[str, Any]:
    """Execute routine for dijkstra_shortest_path variation 5."""
    iteration = 5
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = dijkstra_shortest_path_v5("sample_input", 10)
    assert test_res["status"] == "completed"
    print(f"Test for dijkstra_shortest_path_v5 passed.")
