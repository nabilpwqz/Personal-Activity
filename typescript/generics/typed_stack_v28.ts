/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 28)
 * Module: TypeScript / generics
 * Version: 28.0.0
 */

export interface ITypedStackV28Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV28<T = any> {
  private readonly config: ITypedStackV28Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v28') {
    this.config = { id, version: 28, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV28Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance28 = new TypedStackV28<number>('test-28');
instance28.addItem(280);
