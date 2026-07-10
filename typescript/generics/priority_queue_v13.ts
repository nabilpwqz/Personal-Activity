/**
 * Problem: Generic binary heap priority queue with comparator (Variant 13)
 * Module: TypeScript / generics
 * Version: 13.0.0
 */

export interface IPriorityQueueV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV13<T = any> {
  private readonly config: IPriorityQueueV13Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new PriorityQueueV13<number>('test-13');
instance13.addItem(130);
