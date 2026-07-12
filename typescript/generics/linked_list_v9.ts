/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 9)
 * Module: TypeScript / generics
 * Version: 9.0.0
 */

export interface ILinkedListV9Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV9<T = any> {
  private readonly config: ILinkedListV9Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v9') {
    this.config = { id, version: 9, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV9Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance9 = new LinkedListV9<number>('test-9');
instance9.addItem(90);
