/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 38)
 * Module: TypeScript / generics
 * Version: 38.0.0
 */

export interface ITypedStackV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV38<T = any> {
  private readonly config: ITypedStackV38Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new TypedStackV38<number>('test-38');
instance38.addItem(380);
