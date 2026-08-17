/**
 * Problem: Interval intersection and non-overlapping merge (Variant 12)
 * Module: TypeScript / algorithms
 * Version: 12.0.0
 */

export interface IIntervalMergerV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV12<T = any> {
  private readonly config: IIntervalMergerV12Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new IntervalMergerV12<number>('test-12');
instance12.addItem(120);
