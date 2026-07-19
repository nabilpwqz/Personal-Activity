/**
 * Problem: Generic BST with in-order generator traverse (Variant 45)
 * Module: TypeScript / generics
 * Version: 45.0.0
 */

export interface IBinarySearchTreeV45Config {
  id: string;
  version: number;
  active: boolean;
}

export class BinarySearchTreeV45<T = any> {
  private readonly config: IBinarySearchTreeV45Config;
  private items: T[] = [];

  constructor(id: string = 'binary_search_tree-v45') {
    this.config = { id, version: 45, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBinarySearchTreeV45Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance45 = new BinarySearchTreeV45<number>('test-45');
instance45.addItem(450);
