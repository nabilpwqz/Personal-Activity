/**
 * Problem: Legacy interface adapter wrapper (Variant 38)
 * Module: TypeScript / patterns
 * Version: 38.0.0
 */

export interface IAdapterPatternV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class AdapterPatternV38<T = any> {
  private readonly config: IAdapterPatternV38Config;
  private items: T[] = [];

  constructor(id: string = 'adapter_pattern-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IAdapterPatternV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new AdapterPatternV38<number>('test-38');
instance38.addItem(380);
