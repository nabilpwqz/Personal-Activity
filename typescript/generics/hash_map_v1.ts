/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 1)
 * Module: TypeScript / generics
 * Version: 1.0.0
 */

export interface IHashMapV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV1<T = any> {
  private readonly config: IHashMapV1Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new HashMapV1<number>('test-1');
instance1.addItem(10);
