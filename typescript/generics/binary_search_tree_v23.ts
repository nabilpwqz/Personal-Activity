/**
 * Problem: Generic BST with in-order generator traverse (Variant 23)
 * Module: TypeScript / generics
 * Version: 23.0.0
 */

export interface IBinarySearchTreeV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV23<T = any> {
  private readonly config: IBinarySearchTreeV23Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new BinarySearchTreeV23<number>('test-23');
instance23.addItem(230);
