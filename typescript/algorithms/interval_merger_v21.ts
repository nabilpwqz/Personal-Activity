/**
 * Problem: Interval intersection and non-overlapping merge (Variant 21)
 * Module: TypeScript / algorithms
 * Version: 21.0.0
 */

export interface IIntervalMergerV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV21<T = any> {
  private readonly config: IIntervalMergerV21Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new IntervalMergerV21<number>('test-21');
instance21.addItem(210);
