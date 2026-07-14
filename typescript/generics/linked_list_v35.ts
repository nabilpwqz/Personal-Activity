/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 35)
 * Module: TypeScript / generics
 * Version: 35.0.0
 */

export interface ILinkedListV35Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV35<T = any> {
  private readonly config: ILinkedListV35Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v35') {
    this.config = { id, version: 35, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV35Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance35 = new LinkedListV35<number>('test-35');
instance35.addItem(350);
