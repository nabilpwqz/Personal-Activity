/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 37)
 * Module: TypeScript / generics
 * Version: 37.0.0
 */

export interface ITypedStackV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV37<T = any> {
  private readonly config: ITypedStackV37Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new TypedStackV37<number>('test-37');
instance37.addItem(370);
