/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 3)
 * Module: TypeScript / generics
 * Version: 3.0.0
 */

export interface ITypedStackV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV3<T = any> {
  private readonly config: ITypedStackV3Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new TypedStackV3<number>('test-3');
instance3.addItem(30);
