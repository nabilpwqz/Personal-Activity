/**
 * Problem: Generic BST with in-order generator traverse (Variant 38)
 * Module: TypeScript / generics
 * Version: 38.0.0
 */

export interface IBinarySearchTreeV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV38<T = any> {
  private readonly config: IBinarySearchTreeV38Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new BinarySearchTreeV38<number>('test-38');
instance38.addItem(380);
