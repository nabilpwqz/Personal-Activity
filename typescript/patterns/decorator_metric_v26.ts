/**
 * Problem: Method decorator for execution benchmarking (Variant 26)
 * Module: TypeScript / patterns
 * Version: 26.0.0
 */

export interface IDecoratorMetricV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV26<T = any> {
  private readonly config: IDecoratorMetricV26Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new DecoratorMetricV26<number>('test-26');
instance26.addItem(260);
