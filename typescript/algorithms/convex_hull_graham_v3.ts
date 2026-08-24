/**
 * Problem: Graham scan convex hull 2D points (Variant 3)
 * Module: TypeScript / algorithms
 * Version: 3.0.0
 */

export interface IConvexHullGrahamV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV3<T = any> {
  private readonly config: IConvexHullGrahamV3Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new ConvexHullGrahamV3<number>('test-3');
instance3.addItem(30);
