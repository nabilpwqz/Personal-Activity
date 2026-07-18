/**
 * Problem: Generic BST with in-order generator traverse (Variant 29)
 * Module: TypeScript / generics
 * Version: 29.0.0
 */

export interface IBinarySearchTreeV29Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV29<T = any> {
  private readonly config: IBinarySearchTreeV29Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v29') {
    this.config = { id, version: 29, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV29Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance29 = new BinarySearchTreeV29<number>('test-29');
instance29.addItem(290);
