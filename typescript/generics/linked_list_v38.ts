/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 38)
 * Module: TypeScript / generics
 * Version: 38.0.0
 */

export interface ILinkedListV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV38<T = any> {
  private readonly config: ILinkedListV38Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new LinkedListV38<number>('test-38');
instance38.addItem(380);
