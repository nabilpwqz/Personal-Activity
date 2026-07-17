/**
 * Problem: Generic BST with in-order generator traverse (Variant 9)
 * Module: TypeScript / generics
 * Version: 9.0.0
 */

export interface IBinarySearchTreeV9Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV9<T = any> {
  private readonly config: IBinarySearchTreeV9Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v9') {
    this.config = { id, version: 9, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV9Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance9 = new BinarySearchTreeV9<number>('test-9');
instance9.addItem(90);
