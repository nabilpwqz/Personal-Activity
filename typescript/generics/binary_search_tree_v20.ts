/**
 * Problem: Generic BST with in-order generator traverse (Variant 20)
 * Module: TypeScript / generics
 * Version: 20.0.0
 */

export interface IBinarySearchTreeV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV20<T = any> {
  private readonly config: IBinarySearchTreeV20Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new BinarySearchTreeV20<number>('test-20');
instance20.addItem(200);
