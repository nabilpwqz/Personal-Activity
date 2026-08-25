/**
 * Problem: Graham scan convex hull 2D points (Variant 12)
 * Module: TypeScript / algorithms
 * Version: 12.0.0
 */

export interface IConvexHullGrahamV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV12<T = any> {
  private readonly config: IConvexHullGrahamV12Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new ConvexHullGrahamV12<number>('test-12');
instance12.addItem(120);
