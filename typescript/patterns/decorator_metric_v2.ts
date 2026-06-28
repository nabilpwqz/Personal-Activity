/**
 * Problem: Method decorator for execution benchmarking (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface IDecoratorMetricV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV2<T = any> {
  private readonly config: IDecoratorMetricV2Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new DecoratorMetricV2<number>('test-2');
instance2.addItem(20);
