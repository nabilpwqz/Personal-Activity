/**
 * Problem: Legacy interface adapter wrapper (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface IAdapterPatternV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class AdapterPatternV2<T = any> {
  private readonly config: IAdapterPatternV2Config;
  private items: T[] = [];

  constructor(id: string = 'adapter_pattern-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IAdapterPatternV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new AdapterPatternV2<number>('test-2');
instance2.addItem(20);
