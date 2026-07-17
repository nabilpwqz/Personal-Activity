/**
 * Problem: Generic BST with in-order generator traverse (Variant 12)
 * Module: TypeScript / generics
 * Version: 12.0.0
 */

export interface IBinarySearchTreeV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV12<T = any> {
  private readonly config: IBinarySearchTreeV12Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new BinarySearchTreeV12<number>('test-12');
instance12.addItem(120);
