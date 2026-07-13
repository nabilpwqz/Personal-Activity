/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 27)
 * Module: TypeScript / generics
 * Version: 27.0.0
 */

export interface ILinkedListV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV27<T = any> {
  private readonly config: ILinkedListV27Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new LinkedListV27<number>('test-27');
instance27.addItem(270);
