/**
 * Problem: Scoped singleton instance provider (Variant 22)
 * Module: TypeScript / patterns
 * Version: 22.0.0
 */

export interface ISingletonScopedV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV22<T = any> {
  private readonly config: ISingletonScopedV22Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new SingletonScopedV22<number>('test-22');
instance22.addItem(220);
