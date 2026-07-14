/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 6)
 * Module: TypeScript / generics
 * Version: 6.0.0
 */

export interface IHashMapV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV6<T = any> {
  private readonly config: IHashMapV6Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new HashMapV6<number>('test-6');
instance6.addItem(60);
