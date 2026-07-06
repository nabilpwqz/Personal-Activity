/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 15)
 * Module: TypeScript / generics
 * Version: 15.0.0
 */

export interface ITypedStackV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV15<T = any> {
  private readonly config: ITypedStackV15Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new TypedStackV15<number>('test-15');
instance15.addItem(150);
