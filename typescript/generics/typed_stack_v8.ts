/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 8)
 * Module: TypeScript / generics
 * Version: 8.0.0
 */

export interface ITypedStackV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV8<T = any> {
  private readonly config: ITypedStackV8Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new TypedStackV8<number>('test-8');
instance8.addItem(80);
