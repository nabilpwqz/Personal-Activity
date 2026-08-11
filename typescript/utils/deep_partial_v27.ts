/**
 * Problem: Nested partial patch object utility (Variant 27)
 * Module: TypeScript / utils
 * Version: 27.0.0
 */

export interface IDeepPartialV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV27<T = any> {
  private readonly config: IDeepPartialV27Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new DeepPartialV27<number>('test-27');
instance27.addItem(270);
