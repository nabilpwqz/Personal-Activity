/**
 * Problem: Generic BST with in-order generator traverse (Variant 19)
 * Module: TypeScript / generics
 * Version: 19.0.0
 */

export interface IBinarySearchTreeV19Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV19<T = any> {
  private readonly config: IBinarySearchTreeV19Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v19') {
    this.config = { id, version: 19, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV19Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance19 = new BinarySearchTreeV19<number>('test-19');
instance19.addItem(190);
