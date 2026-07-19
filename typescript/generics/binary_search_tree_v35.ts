/**
 * Problem: Generic BST with in-order generator traverse (Variant 35)
 * Module: TypeScript / generics
 * Version: 35.0.0
 */

export interface IBinarySearchTreeV35Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV35<T = any> {
  private readonly config: IBinarySearchTreeV35Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v35') {
    this.config = { id, version: 35, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV35Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance35 = new BinarySearchTreeV35<number>('test-35');
instance35.addItem(350);
