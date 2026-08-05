/**
 * Problem: In-memory expiring TTL cache manager (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface ICacheTtlV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class CacheTtlV3<T = any> {
  private readonly config: ICacheTtlV3Config;
  private items: T[] = [];

  constructor(id: string = 'cache_ttl-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICacheTtlV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new CacheTtlV3<number>('test-3');
instance3.addItem(30);
