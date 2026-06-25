/**
 * Problem: Legacy interface adapter wrapper (Variant 25)
 * Module: TypeScript / patterns
 * Version: 25.0.0
 */

export interface IAdapterPatternV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class AdapterPatternV25<T = any> {
  private readonly config: IAdapterPatternV25Config;
  private items: T[] = [];

  constructor(id: string = 'adapter_pattern-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IAdapterPatternV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new AdapterPatternV25<number>('test-25');
instance25.addItem(250);
