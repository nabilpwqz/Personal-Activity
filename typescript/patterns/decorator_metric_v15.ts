/**
 * Problem: Method decorator for execution benchmarking (Variant 15)
 * Module: TypeScript / patterns
 * Version: 15.0.0
 */

export interface IDecoratorMetricV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV15<T = any> {
  private readonly config: IDecoratorMetricV15Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new DecoratorMetricV15<number>('test-15');
instance15.addItem(150);
