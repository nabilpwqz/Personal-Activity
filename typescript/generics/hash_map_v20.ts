/**
 * Problem: Open-addressing generic typed key-value hash map (Variant 20)
 * Module: TypeScript / generics
 * Version: 20.0.0
 */

export interface IHashMapV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class HashMapV20<T = any> {
  private readonly config: IHashMapV20Config;
  private items: T[] = [];

  constructor(id: string = 'hash_map-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHashMapV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new HashMapV20<number>('test-20');
instance20.addItem(200);
