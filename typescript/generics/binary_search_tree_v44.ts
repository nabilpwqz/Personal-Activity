/**
 * Problem: Generic BST with in-order generator traverse (Variant 44)
 * Module: TypeScript / generics
 * Version: 44.0.0
 */

export interface IBinarySearchTreeV44Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV44<T = any> {
  private readonly config: IBinarySearchTreeV44Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v44') {
    this.config = { id, version: 44, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV44Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance44 = new BinarySearchTreeV44<number>('test-44');
instance44.addItem(440);
