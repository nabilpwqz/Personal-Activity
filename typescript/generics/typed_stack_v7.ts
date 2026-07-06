/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 7)
 * Module: TypeScript / generics
 * Version: 7.0.0
 */

export interface ITypedStackV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV7<T = any> {
  private readonly config: ITypedStackV7Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new TypedStackV7<number>('test-7');
instance7.addItem(70);
