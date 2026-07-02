/**
 * Problem: Scoped singleton instance provider (Variant 24)
 * Module: TypeScript / patterns
 * Version: 24.0.0
 */

export interface ISingletonScopedV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV24<T = any> {
  private readonly config: ISingletonScopedV24Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new SingletonScopedV24<number>('test-24');
instance24.addItem(240);
