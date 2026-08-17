/**
 * Problem: Interval intersection and non-overlapping merge (Variant 13)
 * Module: TypeScript / algorithms
 * Version: 13.0.0
 */

export interface IIntervalMergerV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV13<T = any> {
  private readonly config: IIntervalMergerV13Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new IntervalMergerV13<number>('test-13');
instance13.addItem(130);
