/**
 * Problem: Method decorator for execution benchmarking (Variant 1)
 * Module: TypeScript / patterns
 * Version: 1.0.0
 */

export interface IDecoratorMetricV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV1<T = any> {
  private readonly config: IDecoratorMetricV1Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new DecoratorMetricV1<number>('test-1');
instance1.addItem(10);
