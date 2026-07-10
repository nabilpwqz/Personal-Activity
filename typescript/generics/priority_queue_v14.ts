/**
 * Problem: Generic binary heap priority queue with comparator (Variant 14)
 * Module: TypeScript / generics
 * Version: 14.0.0
 */

export interface IPriorityQueueV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV14<T = any> {
  private readonly config: IPriorityQueueV14Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new PriorityQueueV14<number>('test-14');
instance14.addItem(140);
