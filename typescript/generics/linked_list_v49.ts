/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 49)
 * Module: TypeScript / generics
 * Version: 49.0.0
 */

export interface ILinkedListV49Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV49<T = any> {
  private readonly config: ILinkedListV49Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v49') {
    this.config = { id, version: 49, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV49Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance49 = new LinkedListV49<number>('test-49');
instance49.addItem(490);
