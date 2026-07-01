/**
 * Problem: Scoped singleton instance provider (Variant 7)
 * Module: TypeScript / patterns
 * Version: 7.0.0
 */

export interface ISingletonScopedV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV7<T = any> {
  private readonly config: ISingletonScopedV7Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new SingletonScopedV7<number>('test-7');
instance7.addItem(70);
