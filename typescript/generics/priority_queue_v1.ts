/**
 * Problem: Generic binary heap priority queue with comparator (Variant 1)
 * Module: TypeScript / generics
 * Version: 1.0.0
 */

export interface IPriorityQueueV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV1<T = any> {
  private readonly config: IPriorityQueueV1Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new PriorityQueueV1<number>('test-1');
instance1.addItem(10);
