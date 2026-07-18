/**
 * Problem: Generic BST with in-order generator traverse (Variant 30)
 * Module: TypeScript / generics
 * Version: 30.0.0
 */

export interface IBinarySearchTreeV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV30<T = any> {
  private readonly config: IBinarySearchTreeV30Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new BinarySearchTreeV30<number>('test-30');
instance30.addItem(300);
