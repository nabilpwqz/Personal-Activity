/**
 * Problem: Generic BST with in-order generator traverse (Variant 24)
 * Module: TypeScript / generics
 * Version: 24.0.0
 */

export interface IBinarySearchTreeV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV24<T = any> {
  private readonly config: IBinarySearchTreeV24Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new BinarySearchTreeV24<number>('test-24');
instance24.addItem(240);
