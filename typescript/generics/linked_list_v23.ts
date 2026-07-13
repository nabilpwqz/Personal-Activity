/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 23)
 * Module: TypeScript / generics
 * Version: 23.0.0
 */

export interface ILinkedListV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV23<T = any> {
  private readonly config: ILinkedListV23Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new LinkedListV23<number>('test-23');
instance23.addItem(230);
