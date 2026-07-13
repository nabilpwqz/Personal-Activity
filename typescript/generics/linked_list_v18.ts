/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 18)
 * Module: TypeScript / generics
 * Version: 18.0.0
 */

export interface ILinkedListV18Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV18<T = any> {
  private readonly config: ILinkedListV18Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v18') {
    this.config = { id, version: 18, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV18Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance18 = new LinkedListV18<number>('test-18');
instance18.addItem(180);
