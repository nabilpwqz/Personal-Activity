/**
 * Problem: Generic BST with in-order generator traverse (Variant 43)
 * Module: TypeScript / generics
 * Version: 43.0.0
 */

export interface IBinarySearchTreeV43Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV43<T = any> {
  private readonly config: IBinarySearchTreeV43Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v43') {
    this.config = { id, version: 43, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV43Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance43 = new BinarySearchTreeV43<number>('test-43');
instance43.addItem(430);
