/**
 * Problem: Scoped singleton instance provider (Variant 30)
 * Module: TypeScript / patterns
 * Version: 30.0.0
 */

export interface ISingletonScopedV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV30<T = any> {
  private readonly config: ISingletonScopedV30Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new SingletonScopedV30<number>('test-30');
instance30.addItem(300);
