/**
 * Problem: Method decorator for execution benchmarking (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface IDecoratorMetricV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV4<T = any> {
  private readonly config: IDecoratorMetricV4Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new DecoratorMetricV4<number>('test-4');
instance4.addItem(40);
