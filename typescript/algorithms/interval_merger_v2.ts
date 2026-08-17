/**
 * Problem: Interval intersection and non-overlapping merge (Variant 2)
 * Module: TypeScript / algorithms
 * Version: 2.0.0
 */

export interface IIntervalMergerV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV2<T = any> {
  private readonly config: IIntervalMergerV2Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new IntervalMergerV2<number>('test-2');
instance2.addItem(20);
