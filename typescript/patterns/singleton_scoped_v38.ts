/**
 * Problem: Scoped singleton instance provider (Variant 38)
 * Module: TypeScript / patterns
 * Version: 38.0.0
 */

export interface ISingletonScopedV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV38<T = any> {
  private readonly config: ISingletonScopedV38Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new SingletonScopedV38<number>('test-38');
instance38.addItem(380);
