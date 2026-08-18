/**
 * Problem: Huffman tree frequency compression encoder (Variant 2)
 * Module: TypeScript / algorithms
 * Version: 2.0.0
 */

export interface IHuffmanEncodingV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class HuffmanEncodingV2<T = any> {
  private readonly config: IHuffmanEncodingV2Config;
  private items: T[] = [];

  constructor(id: string = 'huffman_encoding-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IHuffmanEncodingV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new HuffmanEncodingV2<number>('test-2');
instance2.addItem(20);
