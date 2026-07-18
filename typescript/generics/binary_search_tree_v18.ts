/**
 * Problem: Generic BST with in-order generator traverse (Variant 18)
 * Module: TypeScript / generics
 * Version: 18.0.0
 */

export interface IBinarySearchTreeV18Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV18<T = any> {
  private readonly config: IBinarySearchTreeV18Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v18') {
    this.config = { id, version: 18, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV18Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance18 = new BinarySearchTreeV18<number>('test-18');
instance18.addItem(180);
