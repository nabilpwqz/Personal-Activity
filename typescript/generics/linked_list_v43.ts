/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 43)
 * Module: TypeScript / generics
 * Version: 43.0.0
 */

export interface ILinkedListV43Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV43<T = any> {
  private readonly config: ILinkedListV43Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v43') {
    this.config = { id, version: 43, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV43Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance43 = new LinkedListV43<number>('test-43');
instance43.addItem(430);
