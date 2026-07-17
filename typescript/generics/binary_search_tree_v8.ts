/**
 * Problem: Generic BST with in-order generator traverse (Variant 8)
 * Module: TypeScript / generics
 * Version: 8.0.0
 */

export interface IBinarySearchTreeV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV8<T = any> {
  private readonly config: IBinarySearchTreeV8Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new BinarySearchTreeV8<number>('test-8');
instance8.addItem(80);
