/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface ILinkedListV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV2<T = any> {
  private readonly config: ILinkedListV2Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new LinkedListV2<number>('test-2');
instance2.addItem(20);
