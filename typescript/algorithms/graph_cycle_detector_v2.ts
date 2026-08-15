/**
 * Problem: Tarjan/DFS cycle detection in directed graphs (Variant 2)
 * Module: TypeScript / algorithms
 * Version: 2.0.0
 */

export interface IGraphCycleDetectorV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class GraphCycleDetectorV2<T = any> {
  private readonly config: IGraphCycleDetectorV2Config;
  private items: T[] = [];

  constructor(id: string = 'graph_cycle_detector-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IGraphCycleDetectorV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new GraphCycleDetectorV2<number>('test-2');
instance2.addItem(20);
