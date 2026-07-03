/**
 * Problem: Scoped singleton instance provider (Variant 42)
 * Module: TypeScript / patterns
 * Version: 42.0.0
 */

export interface ISingletonScopedV42Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV42<T = any> {
  private readonly config: ISingletonScopedV42Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v42') {
    this.config = { id, version: 42, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV42Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance42 = new SingletonScopedV42<number>('test-42');
instance42.addItem(420);
