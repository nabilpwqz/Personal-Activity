/**
 * Problem: Scoped singleton instance provider (Variant 5)
 * Module: TypeScript / patterns
 * Version: 5.0.0
 */

export interface ISingletonScopedV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV5<T = any> {
  private readonly config: ISingletonScopedV5Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new SingletonScopedV5<number>('test-5');
instance5.addItem(50);
