/**
 * Problem: Method decorator for execution benchmarking (Variant 36)
 * Module: TypeScript / patterns
 * Version: 36.0.0
 */

export interface IDecoratorMetricV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV36<T = any> {
  private readonly config: IDecoratorMetricV36Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new DecoratorMetricV36<number>('test-36');
instance36.addItem(360);
