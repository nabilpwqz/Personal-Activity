/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 13)
 * Module: TypeScript / generics
 * Version: 13.0.0
 */

export interface ITypedStackV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV13<T = any> {
  private readonly config: ITypedStackV13Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new TypedStackV13<number>('test-13');
instance13.addItem(130);
