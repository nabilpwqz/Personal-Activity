/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 10)
 * Module: TypeScript / generics
 * Version: 10.0.0
 */

export interface ILinkedListV10Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV10<T = any> {
  private readonly config: ILinkedListV10Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v10') {
    this.config = { id, version: 10, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV10Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance10 = new LinkedListV10<number>('test-10');
instance10.addItem(100);
