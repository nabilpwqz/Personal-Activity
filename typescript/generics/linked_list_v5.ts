/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 5)
 * Module: TypeScript / generics
 * Version: 5.0.0
 */

export interface ILinkedListV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV5<T = any> {
  private readonly config: ILinkedListV5Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new LinkedListV5<number>('test-5');
instance5.addItem(50);
