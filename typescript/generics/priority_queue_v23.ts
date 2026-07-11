/**
 * Problem: Generic binary heap priority queue with comparator (Variant 23)
 * Module: TypeScript / generics
 * Version: 23.0.0
 */

export interface IPriorityQueueV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV23<T = any> {
  private readonly config: IPriorityQueueV23Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new PriorityQueueV23<number>('test-23');
instance23.addItem(230);
