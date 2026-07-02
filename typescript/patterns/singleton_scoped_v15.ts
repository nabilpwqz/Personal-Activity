/**
 * Problem: Scoped singleton instance provider (Variant 15)
 * Module: TypeScript / patterns
 * Version: 15.0.0
 */

export interface ISingletonScopedV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV15<T = any> {
  private readonly config: ISingletonScopedV15Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new SingletonScopedV15<number>('test-15');
instance15.addItem(150);
