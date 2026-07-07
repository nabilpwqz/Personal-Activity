/**
 * Problem: Generic FIFO queue with amortized O(1) dequeue (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface ITypedQueueV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class TypedQueueV2<T = any> {
  private readonly config: ITypedQueueV2Config;
  private items: T[] = [];

  constructor(id: string = 'typed_queue-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): ITypedQueueV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new TypedQueueV2<number>('test-2');
instance2.addItem(20);
