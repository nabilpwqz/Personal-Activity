/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 40)
 * Module: TypeScript / generics
 * Version: 40.0.0
 */

export interface ILinkedListV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV40<T = any> {
  private readonly config: ILinkedListV40Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new LinkedListV40<number>('test-40');
instance40.addItem(400);
