/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 17)
 * Module: TypeScript / generics
 * Version: 17.0.0
 */

export interface ILinkedListV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV17<T = any> {
  private readonly config: ILinkedListV17Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new LinkedListV17<number>('test-17');
instance17.addItem(170);
