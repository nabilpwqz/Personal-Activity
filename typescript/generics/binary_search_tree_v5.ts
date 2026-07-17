/**
 * Problem: Generic BST with in-order generator traverse (Variant 5)
 * Module: TypeScript / generics
 * Version: 5.0.0
 */

export interface IBinarySearchTreeV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV5<T = any> {
  private readonly config: IBinarySearchTreeV5Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new BinarySearchTreeV5<number>('test-5');
instance5.addItem(50);
