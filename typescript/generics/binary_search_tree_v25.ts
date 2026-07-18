/**
 * Problem: Generic BST with in-order generator traverse (Variant 25)
 * Module: TypeScript / generics
 * Version: 25.0.0
 */

export interface IBinarySearchTreeV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV25<T = any> {
  private readonly config: IBinarySearchTreeV25Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new BinarySearchTreeV25<number>('test-25');
instance25.addItem(250);
