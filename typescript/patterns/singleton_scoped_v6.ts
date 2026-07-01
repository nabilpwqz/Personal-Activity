/**
 * Problem: Scoped singleton instance provider (Variant 6)
 * Module: TypeScript / patterns
 * Version: 6.0.0
 */

export interface ISingletonScopedV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV6<T = any> {
  private readonly config: ISingletonScopedV6Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new SingletonScopedV6<number>('test-6');
instance6.addItem(60);
