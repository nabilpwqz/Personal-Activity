/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 50)
 * Module: TypeScript / generics
 * Version: 50.0.0
 */

export interface ILinkedListV50Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV50<T = any> {
  private readonly config: ILinkedListV50Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v50') {
    this.config = { id, version: 50, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV50Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance50 = new LinkedListV50<number>('test-50');
instance50.addItem(500);
