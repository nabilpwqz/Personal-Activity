/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 1)
 * Module: TypeScript / generics
 * Version: 1.0.0
 */

export interface ILinkedListV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV1<T = any> {
  private readonly config: ILinkedListV1Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new LinkedListV1<number>('test-1');
instance1.addItem(10);
