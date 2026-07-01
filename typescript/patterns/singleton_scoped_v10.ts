/**
 * Problem: Scoped singleton instance provider (Variant 10)
 * Module: TypeScript / patterns
 * Version: 10.0.0
 */

export interface ISingletonScopedV10Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV10<T = any> {
  private readonly config: ISingletonScopedV10Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v10') {
    this.config = { id, version: 10, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV10Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance10 = new SingletonScopedV10<number>('test-10');
instance10.addItem(100);
