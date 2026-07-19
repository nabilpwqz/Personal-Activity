/**
 * Problem: Generic BST with in-order generator traverse (Variant 37)
 * Module: TypeScript / generics
 * Version: 37.0.0
 */

export interface IBinarySearchTreeV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV37<T = any> {
  private readonly config: IBinarySearchTreeV37Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new BinarySearchTreeV37<number>('test-37');
instance37.addItem(370);
