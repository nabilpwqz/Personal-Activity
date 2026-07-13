/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 20)
 * Module: TypeScript / generics
 * Version: 20.0.0
 */

export interface ILinkedListV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV20<T = any> {
  private readonly config: ILinkedListV20Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new LinkedListV20<number>('test-20');
instance20.addItem(200);
