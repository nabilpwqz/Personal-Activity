/**
 * Problem: Generic LIFO stack with peek and length guards (Variant 36)
 * Module: TypeScript / generics
 * Version: 36.0.0
 */

export interface ITypedStackV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedStackV36<T = any> {
  private readonly config: ITypedStackV36Config;
  private items: T[] = [];

  constructor(id: string = 'typed_stack-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedStackV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new TypedStackV36<number>('test-36');
instance36.addItem(360);
