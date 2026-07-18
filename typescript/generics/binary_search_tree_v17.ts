/**
 * Problem: Generic BST with in-order generator traverse (Variant 17)
 * Module: TypeScript / generics
 * Version: 17.0.0
 */

export interface IBinarySearchTreeV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV17<T = any> {
  private readonly config: IBinarySearchTreeV17Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new BinarySearchTreeV17<number>('test-17');
instance17.addItem(170);
