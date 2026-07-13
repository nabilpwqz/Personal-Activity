/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 15)
 * Module: TypeScript / generics
 * Version: 15.0.0
 */

export interface ILinkedListV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV15<T = any> {
  private readonly config: ILinkedListV15Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new LinkedListV15<number>('test-15');
instance15.addItem(150);
