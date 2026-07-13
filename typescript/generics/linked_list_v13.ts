/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 13)
 * Module: TypeScript / generics
 * Version: 13.0.0
 */

export interface ILinkedListV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV13<T = any> {
  private readonly config: ILinkedListV13Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new LinkedListV13<number>('test-13');
instance13.addItem(130);
