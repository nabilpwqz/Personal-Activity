/**
 * Problem: Scoped singleton instance provider (Variant 19)
 * Module: TypeScript / patterns
 * Version: 19.0.0
 */

export interface ISingletonScopedV19Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV19<T = any> {
  private readonly config: ISingletonScopedV19Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v19') {
    this.config = { id, version: 19, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV19Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance19 = new SingletonScopedV19<number>('test-19');
instance19.addItem(190);
