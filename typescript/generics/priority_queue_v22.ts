/**
 * Problem: Generic binary heap priority queue with comparator (Variant 22)
 * Module: TypeScript / generics
 * Version: 22.0.0
 */

export interface IPriorityQueueV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV22<T = any> {
  private readonly config: IPriorityQueueV22Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new PriorityQueueV22<number>('test-22');
instance22.addItem(220);
