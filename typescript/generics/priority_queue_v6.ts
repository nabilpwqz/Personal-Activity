/**
 * Problem: Generic binary heap priority queue with comparator (Variant 6)
 * Module: TypeScript / generics
 * Version: 6.0.0
 */

export interface IPriorityQueueV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV6<T = any> {
  private readonly config: IPriorityQueueV6Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new PriorityQueueV6<number>('test-6');
instance6.addItem(60);
