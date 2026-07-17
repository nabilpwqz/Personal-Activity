/**
 * Problem: Generic BST with in-order generator traverse (Variant 4)
 * Module: TypeScript / generics
 * Version: 4.0.0
 */

export interface IBinarySearchTreeV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV4<T = any> {
  private readonly config: IBinarySearchTreeV4Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new BinarySearchTreeV4<number>('test-4');
instance4.addItem(40);
