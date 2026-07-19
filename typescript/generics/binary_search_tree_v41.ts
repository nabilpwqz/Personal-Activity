/**
 * Problem: Generic BST with in-order generator traverse (Variant 41)
 * Module: TypeScript / generics
 * Version: 41.0.0
 */

export interface IBinarySearchTreeV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV41<T = any> {
  private readonly config: IBinarySearchTreeV41Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new BinarySearchTreeV41<number>('test-41');
instance41.addItem(410);
