/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 25)
 * Module: TypeScript / generics
 * Version: 25.0.0
 */

export interface IHashMapV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV25<T = any> {
  private readonly config: IHashMapV25Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new HashMapV25<number>('test-25');
instance25.addItem(250);
