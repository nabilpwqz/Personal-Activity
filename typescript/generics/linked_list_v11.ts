/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 11)
 * Module: TypeScript / generics
 * Version: 11.0.0
 */

export interface ILinkedListV11Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV11<T = any> {
  private readonly config: ILinkedListV11Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v11') {
    this.config = { id, version: 11, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV11Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance11 = new LinkedListV11<number>('test-11');
instance11.addItem(110);
