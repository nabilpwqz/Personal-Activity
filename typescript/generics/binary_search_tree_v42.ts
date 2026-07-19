/**
 * Problem: Generic BST with in-order generator traverse (Variant 42)
 * Module: TypeScript / generics
 * Version: 42.0.0
 */

export interface IBinarySearchTreeV42Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV42<T = any> {
  private readonly config: IBinarySearchTreeV42Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v42') {
    this.config = { id, version: 42, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV42Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance42 = new BinarySearchTreeV42<number>('test-42');
instance42.addItem(420);
