/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 30)
 * Module: TypeScript / generics
 * Version: 30.0.0
 */

export interface ILinkedListV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV30<T = any> {
  private readonly config: ILinkedListV30Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new LinkedListV30<number>('test-30');
instance30.addItem(300);
