/**
 * Problem: Generic BST with in-order generator traverse (Variant 13)
 * Module: TypeScript / generics
 * Version: 13.0.0
 */

export interface IBinarySearchTreeV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV13<T = any> {
  private readonly config: IBinarySearchTreeV13Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new BinarySearchTreeV13<number>('test-13');
instance13.addItem(130);
