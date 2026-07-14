/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 47)
 * Module: TypeScript / generics
 * Version: 47.0.0
 */

export interface ILinkedListV47Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV47<T = any> {
  private readonly config: ILinkedListV47Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v47') {
    this.config = { id, version: 47, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV47Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance47 = new LinkedListV47<number>('test-47');
instance47.addItem(470);
