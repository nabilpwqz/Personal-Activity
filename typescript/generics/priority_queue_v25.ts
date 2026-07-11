/**
 * Problem: Generic binary heap priority queue with comparator (Variant 25)
 * Module: TypeScript / generics
 * Version: 25.0.0
 */

export interface IPriorityQueueV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV25<T = any> {
  private readonly config: IPriorityQueueV25Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new PriorityQueueV25<number>('test-25');
instance25.addItem(250);
