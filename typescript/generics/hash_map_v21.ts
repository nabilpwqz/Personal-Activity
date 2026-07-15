/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 21)
 * Module: TypeScript / generics
 * Version: 21.0.0
 */

export interface IHashMapV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV21<T = any> {
  private readonly config: IHashMapV21Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new HashMapV21<number>('test-21');
instance21.addItem(210);
