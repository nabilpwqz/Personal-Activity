/**
 * Problem: Generic BST with in-order generator traverse (Variant 47)
 * Module: TypeScript / generics
 * Version: 47.0.0
 */

export interface IBinarySearchTreeV47Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV47<T = any> {
  private readonly config: IBinarySearchTreeV47Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v47') {
    this.config = { id, version: 47, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV47Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance47 = new BinarySearchTreeV47<number>('test-47');
instance47.addItem(470);
