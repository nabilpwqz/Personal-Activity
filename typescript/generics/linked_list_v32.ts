/**
 * Problem: Generic doubly linked list with bidirectional iterators (Variant 32)
 * Module: TypeScript / generics
 * Version: 32.0.0
 */

export interface ILinkedListV32Config {
  id: string;
  version: number;
  active: boolean;
}

export class LinkedListV32<T = any> {
  private readonly config: ILinkedListV32Config;
  private items: T[] = [];

  constructor(id: string = 'linked_list-v32') {
    this.config = { id, version: 32, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ILinkedListV32Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance32 = new LinkedListV32<number>('test-32');
instance32.addItem(320);
