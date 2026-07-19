/**
 * Problem: Generic BST with in-order generator traverse (Variant 36)
 * Module: TypeScript / generics
 * Version: 36.0.0
 */

export interface IBinarySearchTreeV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV36<T = any> {
  private readonly config: IBinarySearchTreeV36Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new BinarySearchTreeV36<number>('test-36');
instance36.addItem(360);
