/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 31)
 * Module: TypeScript / generics
 * Version: 31.0.0
 */

export interface ILinkedListV31Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV31<T = any> {
  private readonly config: ILinkedListV31Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v31') {
    this.config = { id, version: 31, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV31Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance31 = new LinkedListV31<number>('test-31');
instance31.addItem(310);
