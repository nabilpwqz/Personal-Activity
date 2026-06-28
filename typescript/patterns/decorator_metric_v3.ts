/**
 * Problem: Method decorator for execution benchmarking (Variant 3)
 * Module: TypeScript / patterns
 * Version: 3.0.0
 */

export interface IDecoratorMetricV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV3<T = any> {
  private readonly config: IDecoratorMetricV3Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new DecoratorMetricV3<number>('test-3');
instance3.addItem(30);
