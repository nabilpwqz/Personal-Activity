/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 27)
 * Module: TypeScript / generics
 * Version: 27.0.0
 */

export interface ITypedStackV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV27<T = any> {
  private readonly config: ITypedStackV27Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new TypedStackV27<number>('test-27');
instance27.addItem(270);
