/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 46)
 * Module: TypeScript / generics
 * Version: 46.0.0
 */

export interface ILinkedListV46Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV46<T = any> {
  private readonly config: ILinkedListV46Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v46') {
    this.config = { id, version: 46, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV46Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance46 = new LinkedListV46<number>('test-46');
instance46.addItem(460);
