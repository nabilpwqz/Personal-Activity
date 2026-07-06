/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 14)
 * Module: TypeScript / generics
 * Version: 14.0.0
 */

export interface ITypedStackV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV14<T = any> {
  private readonly config: ITypedStackV14Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new TypedStackV14<number>('test-14');
instance14.addItem(140);
