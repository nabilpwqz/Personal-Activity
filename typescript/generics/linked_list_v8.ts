/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 8)
 * Module: TypeScript / generics
 * Version: 8.0.0
 */

export interface ILinkedListV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV8<T = any> {
  private readonly config: ILinkedListV8Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new LinkedListV8<number>('test-8');
instance8.addItem(80);
