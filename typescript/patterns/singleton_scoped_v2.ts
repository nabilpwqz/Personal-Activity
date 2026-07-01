/**
 * Problem: Scoped singleton instance provider (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface ISingletonScopedV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV2<T = any> {
  private readonly config: ISingletonScopedV2Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new SingletonScopedV2<number>('test-2');
instance2.addItem(20);
