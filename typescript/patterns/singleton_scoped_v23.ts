/**
 * Problem: Scoped singleton instance provider (Variant 23)
 * Module: TypeScript / patterns
 * Version: 23.0.0
 */

export interface ISingletonScopedV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV23<T = any> {
  private readonly config: ISingletonScopedV23Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new SingletonScopedV23<number>('test-23');
instance23.addItem(230);
