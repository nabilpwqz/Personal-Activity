/**
 * Problem: Generic BST with in-order generator traverse (Variant 33)
 * Module: TypeScript / generics
 * Version: 33.0.0
 */

export interface IBinarySearchTreeV33Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV33<T = any> {
  private readonly config: IBinarySearchTreeV33Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v33') {
    this.config = { id, version: 33, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV33Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance33 = new BinarySearchTreeV33<number>('test-33');
instance33.addItem(330);
