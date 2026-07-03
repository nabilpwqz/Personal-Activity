/**
 * Problem: Scoped singleton instance provider (Variant 40)
 * Module: TypeScript / patterns
 * Version: 40.0.0
 */

export interface ISingletonScopedV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class SingletonScopedV40<T = any> {
  private readonly config: ISingletonScopedV40Config;
  private items: T[] = [];

  constructor(id: string = 'singleton_scoped-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ISingletonScopedV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new SingletonScopedV40<number>('test-40');
instance40.addItem(400);
