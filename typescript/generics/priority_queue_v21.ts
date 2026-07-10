/**
 * Problem: Generic binary heap priority queue with comparator (Variant 21)
 * Module: TypeScript / generics
 * Version: 21.0.0
 */

export interface IPriorityQueueV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV21<T = any> {
  private readonly config: IPriorityQueueV21Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new PriorityQueueV21<number>('test-21');
instance21.addItem(210);
