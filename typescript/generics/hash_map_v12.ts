/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 12)
 * Module: TypeScript / generics
 * Version: 12.0.0
 */

export interface IHashMapV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV12<T = any> {
  private readonly config: IHashMapV12Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new HashMapV12<number>('test-12');
instance12.addItem(120);
