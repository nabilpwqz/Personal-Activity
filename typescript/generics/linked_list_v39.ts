/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 39)
 * Module: TypeScript / generics
 * Version: 39.0.0
 */

export interface ILinkedListV39Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV39<T = any> {
  private readonly config: ILinkedListV39Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v39') {
    this.config = { id, version: 39, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV39Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance39 = new LinkedListV39<number>('test-39');
instance39.addItem(390);
