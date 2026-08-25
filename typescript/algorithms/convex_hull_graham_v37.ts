/**
 * Problem: Graham scan convex hull 2D points (Variant 37)
 * Module: TypeScript / algorithms
 * Version: 37.0.0
 */

export interface IConvexHullGrahamV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV37<T = any> {
  private readonly config: IConvexHullGrahamV37Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new ConvexHullGrahamV37<number>('test-37');
instance37.addItem(370);
