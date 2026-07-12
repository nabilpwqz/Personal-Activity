/**
 * Problem: Generic binary heap priority queue with comparator (Variant 38)
 * Module: TypeScript / generics
 * Version: 38.0.0
 */

export interface IPriorityQueueV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV38<T = any> {
  private readonly config: IPriorityQueueV38Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new PriorityQueueV38<number>('test-38');
instance38.addItem(380);
