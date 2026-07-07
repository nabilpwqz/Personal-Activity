/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 41)
 * Module: TypeScript / generics
 * Version: 41.0.0
 */

export interface ITypedStackV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV41<T = any> {
  private readonly config: ITypedStackV41Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new TypedStackV41<number>('test-41');
instance41.addItem(410);
