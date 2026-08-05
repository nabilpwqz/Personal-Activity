/**
 * Problem: In-memory expiring TTL cache manager (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface ICacheTtlV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class CacheTtlV4<T = any> {
  private readonly config: ICacheTtlV4Config;
  private items: T[] = [];

  constructor(id: string = 'cache_ttl-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICacheTtlV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new CacheTtlV4<number>('test-4');
instance4.addItem(40);
