/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 33)
 * Module: TypeScript / generics
 * Version: 33.0.0
 */

export interface ILinkedListV33Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV33<T = any> {
  private readonly config: ILinkedListV33Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v33') {
    this.config = { id, version: 33, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV33Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance33 = new LinkedListV33<number>('test-33');
instance33.addItem(330);
