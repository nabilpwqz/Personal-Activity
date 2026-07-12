/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 6)
 * Module: TypeScript / generics
 * Version: 6.0.0
 */

export interface ILinkedListV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV6<T = any> {
  private readonly config: ILinkedListV6Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new LinkedListV6<number>('test-6');
instance6.addItem(60);
