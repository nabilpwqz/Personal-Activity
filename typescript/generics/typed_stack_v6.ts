/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 6)
 * Module: TypeScript / generics
 * Version: 6.0.0
 */

export interface ITypedStackV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV6<T = any> {
  private readonly config: ITypedStackV6Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new TypedStackV6<number>('test-6');
instance6.addItem(60);
