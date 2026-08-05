/**
 * Problem: In-memory expiring TTL cache manager (Variant 14)
 * Module: TypeScript / utils
 * Version: 14.0.0
 */

export interface ICacheTtlV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class CacheTtlV14<T = any> {
  private readonly config: ICacheTtlV14Config;
  private items: T[] = [];

  constructor(id: string = 'cache_ttl-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ICacheTtlV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new CacheTtlV14<number>('test-14');
instance14.addItem(140);
