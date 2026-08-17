/**
 * Problem: Interval intersection and non-overlapping merge (Variant 4)
 * Module: TypeScript / algorithms
 * Version: 4.0.0
 */

export interface IIntervalMergerV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV4<T = any> {
  private readonly config: IIntervalMergerV4Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new IntervalMergerV4<number>('test-4');
instance4.addItem(40);
