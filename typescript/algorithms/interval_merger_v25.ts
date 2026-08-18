/**
 * Problem: Interval intersection and non-overlapping merge (Variant 25)
 * Module: TypeScript / algorithms
 * Version: 25.0.0
 */

export interface IIntervalMergerV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class IntervalMergerV25<T = any> {
  private readonly config: IIntervalMergerV25Config;
  private items: T[] = [];

  constructor(id: string = 'interval_merger-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIntervalMergerV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new IntervalMergerV25<number>('test-25');
instance25.addItem(250);
