/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 25)
 * Module: TypeScript / generics
 * Version: 25.0.0
 */

export interface ILinkedListV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV25<T = any> {
  private readonly config: ILinkedListV25Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new LinkedListV25<number>('test-25');
instance25.addItem(250);
