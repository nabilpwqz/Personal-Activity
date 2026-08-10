/**
 * Problem: Nested partial patch object utility (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IDeepPartialV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV4<T = any> {
  private readonly config: IDeepPartialV4Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new DeepPartialV4<number>('test-4');
instance4.addItem(40);
