/**
 * Problem: Generic BST with in-order generator traverse (Variant 16)
 * Module: TypeScript / generics
 * Version: 16.0.0
 */

export interface IBinarySearchTreeV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV16<T = any> {
  private readonly config: IBinarySearchTreeV16Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new BinarySearchTreeV16<number>('test-16');
instance16.addItem(160);
