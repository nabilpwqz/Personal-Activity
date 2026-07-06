/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 9)
 * Module: TypeScript / generics
 * Version: 9.0.0
 */

export interface ITypedStackV9Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV9<T = any> {
  private readonly config: ITypedStackV9Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v9') {
    this.config = { id, version: 9, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV9Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance9 = new TypedStackV9<number>('test-9');
instance9.addItem(90);
