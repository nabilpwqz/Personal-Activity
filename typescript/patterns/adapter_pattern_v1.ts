/**
 * Problem: Legacy interface adapter wrapper (Variant 1)
 * Module: TypeScript / patterns
 * Version: 1.0.0
 */

export interface IAdapterPatternV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class AdapterPatternV1<T = any> {
  private readonly config: IAdapterPatternV1Config;
  private items: T[] = [];

  constructor(id: string = 'adapter_pattern-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IAdapterPatternV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new AdapterPatternV1<number>('test-1');
instance1.addItem(10);
