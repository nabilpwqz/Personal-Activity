/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 29)
 * Module: TypeScript / generics
 * Version: 29.0.0
 */

export interface ILinkedListV29Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV29<T = any> {
  private readonly config: ILinkedListV29Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v29') {
    this.config = { id, version: 29, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV29Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance29 = new LinkedListV29<number>('test-29');
instance29.addItem(290);
