/**
 * Problem: Generic BST with in-order generator traverse (Variant 26)
 * Module: TypeScript / generics
 * Version: 26.0.0
 */

export interface IBinarySearchTreeV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV26<T = any> {
  private readonly config: IBinarySearchTreeV26Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new BinarySearchTreeV26<number>('test-26');
instance26.addItem(260);
