/**
 * Problem: Generic BST with in-order generator traverse (Variant 31)
 * Module: TypeScript / generics
 * Version: 31.0.0
 */

export interface IBinarySearchTreeV31Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV31<T = any> {
  private readonly config: IBinarySearchTreeV31Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v31') {
    this.config = { id, version: 31, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV31Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance31 = new BinarySearchTreeV31<number>('test-31');
instance31.addItem(310);
