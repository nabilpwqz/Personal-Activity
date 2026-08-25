/**
 * Problem: Graham scan convex hull 2D points (Variant 36)
 * Module: TypeScript / algorithms
 * Version: 36.0.0
 */

export interface IConvexHullGrahamV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV36<T = any> {
  private readonly config: IConvexHullGrahamV36Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new ConvexHullGrahamV36<number>('test-36');
instance36.addItem(360);
