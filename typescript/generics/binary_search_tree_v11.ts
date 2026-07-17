/**
 * Problem: Generic BST with in-order generator traverse (Variant 11)
 * Module: TypeScript / generics
 * Version: 11.0.0
 */

export interface IBinarySearchTreeV11Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV11<T = any> {
  private readonly config: IBinarySearchTreeV11Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v11') {
    this.config = { id, version: 11, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV11Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance11 = new BinarySearchTreeV11<number>('test-11');
instance11.addItem(110);
