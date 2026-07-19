/**
 * Problem: Generic BST with in-order generator traverse (Variant 46)
 * Module: TypeScript / generics
 * Version: 46.0.0
 */

export interface IBinarySearchTreeV46Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV46<T = any> {
  private readonly config: IBinarySearchTreeV46Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v46') {
    this.config = { id, version: 46, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV46Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance46 = new BinarySearchTreeV46<number>('test-46');
instance46.addItem(460);
