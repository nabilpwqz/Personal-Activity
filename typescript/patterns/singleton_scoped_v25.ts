/**
 * Problem: Scoped singleton instance provider (Variant 25)
 * Module: TypeScript / patterns
 * Version: 25.0.0
 */

export interface ISingletonScopedV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV25<T = any> {
  private readonly config: ISingletonScopedV25Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new SingletonScopedV25<number>('test-25');
instance25.addItem(250);
