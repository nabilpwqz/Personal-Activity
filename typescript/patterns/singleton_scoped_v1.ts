/**
 * Problem: Scoped singleton instance provider (Variant 1)
 * Module: TypeScript / patterns
 * Version: 1.0.0
 */

export interface ISingletonScopedV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV1<T = any> {
  private readonly config: ISingletonScopedV1Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new SingletonScopedV1<number>('test-1');
instance1.addItem(10);
