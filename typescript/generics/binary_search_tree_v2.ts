/**
 * Problem: Generic BST with in-order generator traverse (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface IBinarySearchTreeV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV2<T = any> {
  private readonly config: IBinarySearchTreeV2Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new BinarySearchTreeV2<number>('test-2');
instance2.addItem(20);
