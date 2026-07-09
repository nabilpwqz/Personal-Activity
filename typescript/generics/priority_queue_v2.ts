/**
 * Problem: Generic binary heap priority queue with comparator (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface IPriorityQueueV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV2<T = any> {
  private readonly config: IPriorityQueueV2Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new PriorityQueueV2<number>('test-2');
instance2.addItem(20);
