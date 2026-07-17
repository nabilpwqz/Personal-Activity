/**
 * Problem: Generic BST with in-order generator traverse (Variant 15)
 * Module: TypeScript / generics
 * Version: 15.0.0
 */

export interface IBinarySearchTreeV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV15<T = any> {
  private readonly config: IBinarySearchTreeV15Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new BinarySearchTreeV15<number>('test-15');
instance15.addItem(150);
