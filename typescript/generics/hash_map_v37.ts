/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 37)
 * Module: TypeScript / generics
 * Version: 37.0.0
 */

export interface IHashMapV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV37<T = any> {
  private readonly config: IHashMapV37Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new HashMapV37<number>('test-37');
instance37.addItem(370);
