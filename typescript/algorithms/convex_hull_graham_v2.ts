/**
 * Problem: Graham scan convex hull 2D points (Variant 2)
 * Module: TypeScript / algorithms
 * Version: 2.0.0
 */

export interface IConvexHullGrahamV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV2<T = any> {
  private readonly config: IConvexHullGrahamV2Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new ConvexHullGrahamV2<number>('test-2');
instance2.addItem(20);
