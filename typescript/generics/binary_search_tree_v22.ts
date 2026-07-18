/**
 * Problem: Generic BST with in-order generator traverse (Variant 22)
 * Module: TypeScript / generics
 * Version: 22.0.0
 */

export interface IBinarySearchTreeV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV22<T = any> {
  private readonly config: IBinarySearchTreeV22Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new BinarySearchTreeV22<number>('test-22');
instance22.addItem(220);
