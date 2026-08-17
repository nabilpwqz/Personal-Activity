/**
 * Problem: Interval intersection and non-overlapping merge (Variant 3)
 * Module: TypeScript / algorithms
 * Version: 3.0.0
 */

export interface IIntervalMergerV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV3<T = any> {
  private readonly config: IIntervalMergerV3Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new IntervalMergerV3<number>('test-3');
instance3.addItem(30);
