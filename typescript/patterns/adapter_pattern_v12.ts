/**
 * Problem: Legacy interface adapter wrapper (Variant 12)
 * Module: TypeScript / patterns
 * Version: 12.0.0
 */

export interface IAdapterPatternV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class AdapterPatternV12<T = any> {
  private readonly config: IAdapterPatternV12Config;
  private items: T[] = [];

  constructor(id: string = 'adapter_pattern-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IAdapterPatternV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new AdapterPatternV12<number>('test-12');
instance12.addItem(120);
