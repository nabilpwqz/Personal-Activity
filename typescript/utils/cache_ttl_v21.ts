/**
 * Problem: In-memory expiring TTL cache manager (Variant 21)
 * Module: TypeScript / utils
 * Version: 21.0.0
 */

export interface ICacheTtlV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class CacheTtlV21<T = any> {
  private readonly config: ICacheTtlV21Config;
  private items: T[] = [];

  constructor(id: string = 'cache_ttl-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICacheTtlV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new CacheTtlV21<number>('test-21');
instance21.addItem(210);
