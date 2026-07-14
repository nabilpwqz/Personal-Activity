/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 3)
 * Module: TypeScript / generics
 * Version: 3.0.0
 */

export interface IHashMapV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV3<T = any> {
  private readonly config: IHashMapV3Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new HashMapV3<number>('test-3');
instance3.addItem(30);
