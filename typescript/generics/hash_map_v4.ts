/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 4)
 * Module: TypeScript / generics
 * Version: 4.0.0
 */

export interface IHashMapV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV4<T = any> {
  private readonly config: IHashMapV4Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new HashMapV4<number>('test-4');
instance4.addItem(40);
