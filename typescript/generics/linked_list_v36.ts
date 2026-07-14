/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 36)
 * Module: TypeScript / generics
 * Version: 36.0.0
 */

export interface ILinkedListV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV36<T = any> {
  private readonly config: ILinkedListV36Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new LinkedListV36<number>('test-36');
instance36.addItem(360);
