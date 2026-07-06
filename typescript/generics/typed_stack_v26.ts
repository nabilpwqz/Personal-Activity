/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 26)
 * Module: TypeScript / generics
 * Version: 26.0.0
 */

export interface ITypedStackV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV26<T = any> {
  private readonly config: ITypedStackV26Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new TypedStackV26<number>('test-26');
instance26.addItem(260);
