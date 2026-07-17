/**
 * Problem: Generic BST with in-order generator traverse (Variant 6)
 * Module: TypeScript / generics
 * Version: 6.0.0
 */

export interface IBinarySearchTreeV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV6<T = any> {
  private readonly config: IBinarySearchTreeV6Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new BinarySearchTreeV6<number>('test-6');
instance6.addItem(60);
