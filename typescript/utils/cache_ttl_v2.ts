/**
 * Problem: In-memory expiring TTL cache manager (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface ICacheTtlV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class CacheTtlV2<T = any> {
  private readonly config: ICacheTtlV2Config;
  private items: T[] = [];

  constructor(id: string = 'cache_ttl-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICacheTtlV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new CacheTtlV2<number>('test-2');
instance2.addItem(20);
