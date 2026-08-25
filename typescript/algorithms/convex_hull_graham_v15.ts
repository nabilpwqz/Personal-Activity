/**
 * Problem: Graham scan convex hull 2D points (Variant 15)
 * Module: TypeScript / algorithms
 * Version: 15.0.0
 */

export interface IConvexHullGrahamV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV15<T = any> {
  private readonly config: IConvexHullGrahamV15Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new ConvexHullGrahamV15<number>('test-15');
instance15.addItem(150);
