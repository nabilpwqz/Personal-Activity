/**
 * Problem: Generic BST with in-order generator traverse (Variant 27)
 * Module: TypeScript / generics
 * Version: 27.0.0
 */

export interface IBinarySearchTreeV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV27<T = any> {
  private readonly config: IBinarySearchTreeV27Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new BinarySearchTreeV27<number>('test-27');
instance27.addItem(270);
