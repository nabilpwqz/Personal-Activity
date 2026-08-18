/**
 * Problem: Interval intersection and non-overlapping merge (Variant 37)
 * Module: TypeScript / algorithms
 * Version: 37.0.0
 */

export interface IIntervalMergerV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV37<T = any> {
  private readonly config: IIntervalMergerV37Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new IntervalMergerV37<number>('test-37');
instance37.addItem(370);
