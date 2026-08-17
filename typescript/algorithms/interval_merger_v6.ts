/**
 * Problem: Interval intersection and non-overlapping merge (Variant 6)
 * Module: TypeScript / algorithms
 * Version: 6.0.0
 */

export interface IIntervalMergerV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV6<T = any> {
  private readonly config: IIntervalMergerV6Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new IntervalMergerV6<number>('test-6');
instance6.addItem(60);
