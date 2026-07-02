/**
 * Problem: Scoped singleton instance provider (Variant 37)
 * Module: TypeScript / patterns
 * Version: 37.0.0
 */

export interface ISingletonScopedV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV37<T = any> {
  private readonly config: ISingletonScopedV37Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new SingletonScopedV37<number>('test-37');
instance37.addItem(370);
