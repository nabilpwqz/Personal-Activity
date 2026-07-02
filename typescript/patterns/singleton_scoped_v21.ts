/**
 * Problem: Scoped singleton instance provider (Variant 21)
 * Module: TypeScript / patterns
 * Version: 21.0.0
 */

export interface ISingletonScopedV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV21<T = any> {
  private readonly config: ISingletonScopedV21Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new SingletonScopedV21<number>('test-21');
instance21.addItem(210);
