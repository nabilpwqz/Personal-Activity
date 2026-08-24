/**
 * Problem: Graham scan convex hull 2D points (Variant 4)
 * Module: TypeScript / algorithms
 * Version: 4.0.0
 */

export interface IConvexHullGrahamV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV4<T = any> {
  private readonly config: IConvexHullGrahamV4Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new ConvexHullGrahamV4<number>('test-4');
instance4.addItem(40);
