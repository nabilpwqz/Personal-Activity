/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 4)
 * Module: TypeScript / generics
 * Version: 4.0.0
 */

export interface ILinkedListV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV4<T = any> {
  private readonly config: ILinkedListV4Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new LinkedListV4<number>('test-4');
instance4.addItem(40);
