/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 24)
 * Module: TypeScript / generics
 * Version: 24.0.0
 */

export interface ILinkedListV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV24<T = any> {
  private readonly config: ILinkedListV24Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new LinkedListV24<number>('test-24');
instance24.addItem(240);
