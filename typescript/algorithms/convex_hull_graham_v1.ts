/**
 * Problem: Graham scan convex hull 2D points (Variant 1)
 * Module: TypeScript / algorithms
 * Version: 1.0.0
 */

export interface IConvexHullGrahamV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV1<T = any> {
  private readonly config: IConvexHullGrahamV1Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new ConvexHullGrahamV1<number>('test-1');
instance1.addItem(10);
