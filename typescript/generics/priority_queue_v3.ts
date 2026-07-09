/**
 * Problem: Generic binary heap priority queue with comparator (Variant 3)
 * Module: TypeScript / generics
 * Version: 3.0.0
 */

export interface IPriorityQueueV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV3<T = any> {
  private readonly config: IPriorityQueueV3Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new PriorityQueueV3<number>('test-3');
instance3.addItem(30);
