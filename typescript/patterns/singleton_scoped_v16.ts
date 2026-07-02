/**
 * Problem: Scoped singleton instance provider (Variant 16)
 * Module: TypeScript / patterns
 * Version: 16.0.0
 */

export interface ISingletonScopedV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV16<T = any> {
  private readonly config: ISingletonScopedV16Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new SingletonScopedV16<number>('test-16');
instance16.addItem(160);
