/**
 * Problem: Method decorator for execution benchmarking (Variant 6)
 * Module: TypeScript / patterns
 * Version: 6.0.0
 */

export interface IDecoratorMetricV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV6<T = any> {
  private readonly config: IDecoratorMetricV6Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new DecoratorMetricV6<number>('test-6');
instance6.addItem(60);
