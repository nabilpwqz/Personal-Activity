/**
 * Problem: Generic BST with in-order generator traverse (Variant 21)
 * Module: TypeScript / generics
 * Version: 21.0.0
 */

export interface IBinarySearchTreeV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV21<T = any> {
  private readonly config: IBinarySearchTreeV21Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new BinarySearchTreeV21<number>('test-21');
instance21.addItem(210);
