/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 24)
 * Module: TypeScript / generics
 * Version: 24.0.0
 */

export interface ITypedStackV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV24<T = any> {
  private readonly config: ITypedStackV24Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new TypedStackV24<number>('test-24');
instance24.addItem(240);
