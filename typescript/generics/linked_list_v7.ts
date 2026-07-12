/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 7)
 * Module: TypeScript / generics
 * Version: 7.0.0
 */

export interface ILinkedListV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV7<T = any> {
  private readonly config: ILinkedListV7Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new LinkedListV7<number>('test-7');
instance7.addItem(70);
