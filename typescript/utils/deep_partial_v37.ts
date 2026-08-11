/**
 * Problem: Nested partial patch object utility (Variant 37)
 * Module: TypeScript / utils
 * Version: 37.0.0
 */

export interface IDeepPartialV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV37<T = any> {
  private readonly config: IDeepPartialV37Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new DeepPartialV37<number>('test-37');
instance37.addItem(370);
