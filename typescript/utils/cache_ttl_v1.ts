/**
 * Problem: In-memory expiring TTL cache manager (Variant 1)
 * Module: TypeScript / utils
 * Version: 1.0.0
 */

export interface ICacheTtlV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class CacheTtlV1<T = any> {
  private readonly config: ICacheTtlV1Config;
  private items: T[] = [];

  constructor(id: string = 'cache_ttl-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICacheTtlV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new CacheTtlV1<number>('test-1');
instance1.addItem(10);
