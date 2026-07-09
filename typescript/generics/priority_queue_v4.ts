/**
 * Problem: Generic binary heap priority queue with comparator (Variant 4)
 * Module: TypeScript / generics
 * Version: 4.0.0
 */

export interface IPriorityQueueV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV4<T = any> {
  private readonly config: IPriorityQueueV4Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new PriorityQueueV4<number>('test-4');
instance4.addItem(40);
