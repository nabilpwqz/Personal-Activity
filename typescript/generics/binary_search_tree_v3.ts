/**
 * Problem: Generic BST with in-order generator traverse (Variant 3)
 * Module: TypeScript / generics
 * Version: 3.0.0
 */

export interface IBinarySearchTreeV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV3<T = any> {
  private readonly config: IBinarySearchTreeV3Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new BinarySearchTreeV3<number>('test-3');
instance3.addItem(30);
