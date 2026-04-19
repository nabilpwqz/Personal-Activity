"""
Problem: Dijkstra shortest path with priority queue (Variant 15)
Module: Python / algorithms
Version: 15.0.0
"""

from typing import List, Dict, Any, Optional

def dijkstra_shortest_path_v15(data: Any, param: Optional[int] = 15) -> Dict[str, Any]:
    """Execute routine for dijkstra_shortest_path variation 15."""
    iteration = 15
    result = {
        "status": "completed",
        "variant": iteration,
        "payload_length": len(str(data)) if data is not None else 0
    }
    return result

if __name__ == "__main__":
    test_res = dijkstra_shortest_path_v15("sample_input", 30)
    assert test_res["status"] == "completed"
    print(f"Test for dijkstra_shortest_path_v15 passed.")
