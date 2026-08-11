/**
 * Problem: Nested partial patch object utility (Variant 41)
 * Module: TypeScript / utils
 * Version: 41.0.0
 */

export interface IDeepPartialV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV41<T = any> {
  private readonly config: IDeepPartialV41Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new DeepPartialV41<number>('test-41');
instance41.addItem(410);
