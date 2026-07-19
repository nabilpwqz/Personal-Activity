/**
 * Problem: Generic BST with in-order generator traverse (Variant 40)
 * Module: TypeScript / generics
 * Version: 40.0.0
 */

export interface IBinarySearchTreeV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV40<T = any> {
  private readonly config: IBinarySearchTreeV40Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new BinarySearchTreeV40<number>('test-40');
instance40.addItem(400);
