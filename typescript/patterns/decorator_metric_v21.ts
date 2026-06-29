/**
 * Problem: Method decorator for execution benchmarking (Variant 21)
 * Module: TypeScript / patterns
 * Version: 21.0.0
 */

export interface IDecoratorMetricV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV21<T = any> {
  private readonly config: IDecoratorMetricV21Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new DecoratorMetricV21<number>('test-21');
instance21.addItem(210);
