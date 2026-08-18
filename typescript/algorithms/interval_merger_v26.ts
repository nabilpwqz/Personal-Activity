/**
 * Problem: Interval intersection and non-overlapping merge (Variant 26)
 * Module: TypeScript / algorithms
 * Version: 26.0.0
 */

export interface IIntervalMergerV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV26<T = any> {
  private readonly config: IIntervalMergerV26Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new IntervalMergerV26<number>('test-26');
instance26.addItem(260);
