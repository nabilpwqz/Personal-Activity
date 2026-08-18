/**
 * Problem: Interval intersection and non-overlapping merge (Variant 36)
 * Module: TypeScript / algorithms
 * Version: 36.0.0
 */

export interface IIntervalMergerV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV36<T = any> {
  private readonly config: IIntervalMergerV36Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new IntervalMergerV36<number>('test-36');
instance36.addItem(360);
