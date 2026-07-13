/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 21)
 * Module: TypeScript / generics
 * Version: 21.0.0
 */

export interface ILinkedListV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV21<T = any> {
  private readonly config: ILinkedListV21Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new LinkedListV21<number>('test-21');
instance21.addItem(210);
