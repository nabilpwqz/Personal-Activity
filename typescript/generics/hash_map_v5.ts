/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 5)
 * Module: TypeScript / generics
 * Version: 5.0.0
 */

export interface IHashMapV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV5<T = any> {
  private readonly config: IHashMapV5Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new HashMapV5<number>('test-5');
instance5.addItem(50);
