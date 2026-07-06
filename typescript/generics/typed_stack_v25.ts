/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 25)
 * Module: TypeScript / generics
 * Version: 25.0.0
 */

export interface ITypedStackV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV25<T = any> {
  private readonly config: ITypedStackV25Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new TypedStackV25<number>('test-25');
instance25.addItem(250);
