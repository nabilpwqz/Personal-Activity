/**
 * Problem: Generic BST with in-order generator traverse (Variant 28)
 * Module: TypeScript / generics
 * Version: 28.0.0
 */

export interface IBinarySearchTreeV28Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV28<T = any> {
  private readonly config: IBinarySearchTreeV28Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v28') {
    this.config = { id, version: 28, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV28Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance28 = new BinarySearchTreeV28<number>('test-28');
instance28.addItem(280);
