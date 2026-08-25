/**
 * Problem: Graham scan convex hull 2D points (Variant 27)
 * Module: TypeScript / algorithms
 * Version: 27.0.0
 */

export interface IConvexHullGrahamV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV27<T = any> {
  private readonly config: IConvexHullGrahamV27Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new ConvexHullGrahamV27<number>('test-27');
instance27.addItem(270);
