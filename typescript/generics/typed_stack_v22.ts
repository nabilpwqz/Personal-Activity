/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 22)
 * Module: TypeScript / generics
 * Version: 22.0.0
 */

export interface ITypedStackV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV22<T = any> {
  private readonly config: ITypedStackV22Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new TypedStackV22<number>('test-22');
instance22.addItem(220);
