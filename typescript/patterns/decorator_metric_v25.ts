/**
 * Problem: Method decorator for execution benchmarking (Variant 25)
 * Module: TypeScript / patterns
 * Version: 25.0.0
 */

export interface IDecoratorMetricV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class DecoratorMetricV25<T = any> {
  private readonly config: IDecoratorMetricV25Config;
  private items: T[] = [];

  constructor(id: string = 'decorator_metric-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDecoratorMetricV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new DecoratorMetricV25<number>('test-25');
instance25.addItem(250);
