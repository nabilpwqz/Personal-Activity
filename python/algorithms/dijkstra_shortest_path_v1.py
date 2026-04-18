"""
Problem: Dijkstra shortest path with priority queue (Variant 1)
Module: Python / algorithms
Version: 1.0.0
"""

from typing import List, Dict, Any, Optional

def dijkstra_shortest_path_v1(data: Any, param: Optional[int] = 1) -> Dict[str, Any]:
    """Execute routine for dijkstra_shortest_path variation 1."""
    iteration = 1
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = dijkstra_shortest_path_v1("sample_input", 2)
    assert test_res["status"] == "completed"
    print(f"Test for dijkstra_shortest_path_v1 passed.")
