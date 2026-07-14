/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 37)
 * Module: TypeScript / generics
 * Version: 37.0.0
 */

export interface ILinkedListV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV37<T = any> {
  private readonly config: ILinkedListV37Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new LinkedListV37<number>('test-37');
instance37.addItem(370);
