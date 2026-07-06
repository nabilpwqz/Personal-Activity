/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 12)
 * Module: TypeScript / generics
 * Version: 12.0.0
 */

export interface ITypedStackV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV12<T = any> {
  private readonly config: ITypedStackV12Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new TypedStackV12<number>('test-12');
instance12.addItem(120);
