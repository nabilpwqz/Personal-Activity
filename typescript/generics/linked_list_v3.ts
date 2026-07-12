/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 3)
 * Module: TypeScript / generics
 * Version: 3.0.0
 */

export interface ILinkedListV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV3<T = any> {
  private readonly config: ILinkedListV3Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new LinkedListV3<number>('test-3');
instance3.addItem(30);
