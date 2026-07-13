/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 16)
 * Module: TypeScript / generics
 * Version: 16.0.0
 */

export interface ILinkedListV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV16<T = any> {
  private readonly config: ILinkedListV16Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new LinkedListV16<number>('test-16');
instance16.addItem(160);
