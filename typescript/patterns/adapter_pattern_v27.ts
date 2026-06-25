/**
 * Problem: Legacy interface adapter wrapper (Variant 27)
 * Module: TypeScript / patterns
 * Version: 27.0.0
 */

export interface IAdapterPatternV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class AdapterPatternV27<T = any> {
  private readonly config: IAdapterPatternV27Config;
  private items: T[] = [];

  constructor(id: string = 'adapter_pattern-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IAdapterPatternV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new AdapterPatternV27<number>('test-27');
instance27.addItem(270);
