/**
 * Problem: Nested partial patch object utility (Variant 15)
 * Module: TypeScript / utils
 * Version: 15.0.0
 */

export interface IDeepPartialV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV15<T = any> {
  private readonly config: IDeepPartialV15Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new DeepPartialV15<number>('test-15');
instance15.addItem(150);
