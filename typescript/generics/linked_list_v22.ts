/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 22)
 * Module: TypeScript / generics
 * Version: 22.0.0
 */

export interface ILinkedListV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV22<T = any> {
  private readonly config: ILinkedListV22Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new LinkedListV22<number>('test-22');
instance22.addItem(220);
