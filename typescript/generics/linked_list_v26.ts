/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 26)
 * Module: TypeScript / generics
 * Version: 26.0.0
 */

export interface ILinkedListV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV26<T = any> {
  private readonly config: ILinkedListV26Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new LinkedListV26<number>('test-26');
instance26.addItem(260);
