/**
 * Problem: Scoped singleton instance provider (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface ISingletonScopedV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV4<T = any> {
  private readonly config: ISingletonScopedV4Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new SingletonScopedV4<number>('test-4');
instance4.addItem(40);
