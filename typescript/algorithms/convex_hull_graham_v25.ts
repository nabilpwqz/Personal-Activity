/**
 * Problem: Graham scan convex hull 2D points (Variant 25)
 * Module: TypeScript / algorithms
 * Version: 25.0.0
 */

export interface IConvexHullGrahamV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class ConvexHullGrahamV25<T = any> {
  private readonly config: IConvexHullGrahamV25Config;
  private items: T[] = [];

  constructor(id: string = 'convex_hull_graham-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IConvexHullGrahamV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new ConvexHullGrahamV25<number>('test-25');
instance25.addItem(250);
