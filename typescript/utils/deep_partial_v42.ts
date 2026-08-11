/**
 * Problem: Nested partial patch object utility (Variant 42)
 * Module: TypeScript / utils
 * Version: 42.0.0
 */

export interface IDeepPartialV42Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV42<T = any> {
  private readonly config: IDeepPartialV42Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v42') {
    this.config = { id, version: 42, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV42Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance42 = new DeepPartialV42<number>('test-42');
instance42.addItem(420);
