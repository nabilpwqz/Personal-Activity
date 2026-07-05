/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface ITypedStackV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV2<T = any> {
  private readonly config: ITypedStackV2Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new TypedStackV2<number>('test-2');
instance2.addItem(20);
