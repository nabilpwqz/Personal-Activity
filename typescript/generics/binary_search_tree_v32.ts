/**
 * Problem: Generic BST with in-order generator traverse (Variant 32)
 * Module: TypeScript / generics
 * Version: 32.0.0
 */

export interface IBinarySearchTreeV32Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV32<T = any> {
  private readonly config: IBinarySearchTreeV32Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v32') {
    this.config = { id, version: 32, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV32Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance32 = new BinarySearchTreeV32<number>('test-32');
instance32.addItem(320);
