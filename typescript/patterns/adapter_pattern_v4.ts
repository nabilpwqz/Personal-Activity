/**
 * Problem: Legacy interface adapter wrapper (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface IAdapterPatternV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class AdapterPatternV4<T = any> {
  private readonly config: IAdapterPatternV4Config;
  private items: T[] = [];

  constructor(id: string = 'adapter_pattern-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IAdapterPatternV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new AdapterPatternV4<number>('test-4');
instance4.addItem(40);
