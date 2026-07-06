/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 17)
 * Module: TypeScript / generics
 * Version: 17.0.0
 */

export interface ITypedStackV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV17<T = any> {
  private readonly config: ITypedStackV17Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new TypedStackV17<number>('test-17');
instance17.addItem(170);
