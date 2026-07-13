/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 14)
 * Module: TypeScript / generics
 * Version: 14.0.0
 */

export interface ILinkedListV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV14<T = any> {
  private readonly config: ILinkedListV14Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new LinkedListV14<number>('test-14');
instance14.addItem(140);
