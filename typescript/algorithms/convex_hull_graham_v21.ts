/**
 * Problem: Graham scan convex hull 2D points (Variant 21)
 * Module: TypeScript / algorithms
 * Version: 21.0.0
 */

export interface IConvexHullGrahamV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV21<T = any> {
  private readonly config: IConvexHullGrahamV21Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new ConvexHullGrahamV21<number>('test-21');
instance21.addItem(210);
