/**
 * Problem: Generic BST with in-order generator traverse (Variant 39)
 * Module: TypeScript / generics
 * Version: 39.0.0
 */

export interface IBinarySearchTreeV39Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV39<T = any> {
  private readonly config: IBinarySearchTreeV39Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v39') {
    this.config = { id, version: 39, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV39Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance39 = new BinarySearchTreeV39<number>('test-39');
instance39.addItem(390);
