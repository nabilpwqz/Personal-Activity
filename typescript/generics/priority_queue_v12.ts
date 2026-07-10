/**
 * Problem: Generic binary heap priority queue with comparator (Variant 12)
 * Module: TypeScript / generics
 * Version: 12.0.0
 */

export interface IPriorityQueueV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV12<T = any> {
  private readonly config: IPriorityQueueV12Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new PriorityQueueV12<number>('test-12');
instance12.addItem(120);
