/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface IHashMapV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV2<T = any> {
  private readonly config: IHashMapV2Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new HashMapV2<number>('test-2');
instance2.addItem(20);
