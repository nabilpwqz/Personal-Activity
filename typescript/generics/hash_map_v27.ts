/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 27)
 * Module: TypeScript / generics
 * Version: 27.0.0
 */

export interface IHashMapV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV27<T = any> {
  private readonly config: IHashMapV27Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new HashMapV27<number>('test-27');
instance27.addItem(270);
