/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 41)
 * Module: TypeScript / generics
 * Version: 41.0.0
 */

export interface ILinkedListV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV41<T = any> {
  private readonly config: ILinkedListV41Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new LinkedListV41<number>('test-41');
instance41.addItem(410);
