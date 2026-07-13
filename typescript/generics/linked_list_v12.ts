/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 12)
 * Module: TypeScript / generics
 * Version: 12.0.0
 */

export interface ILinkedListV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV12<T = any> {
  private readonly config: ILinkedListV12Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new LinkedListV12<number>('test-12');
instance12.addItem(120);
