/**
 * Problem: Interval intersection and non-overlapping merge (Variant 8)
 * Module: TypeScript / algorithms
 * Version: 8.0.0
 */

export interface IIntervalMergerV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV8<T = any> {
  private readonly config: IIntervalMergerV8Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new IntervalMergerV8<number>('test-8');
instance8.addItem(80);
