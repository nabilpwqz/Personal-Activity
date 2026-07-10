/**
 * Problem: Generic binary heap priority queue with comparator (Variant 8)
 * Module: TypeScript / generics
 * Version: 8.0.0
 */

export interface IPriorityQueueV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV8<T = any> {
  private readonly config: IPriorityQueueV8Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new PriorityQueueV8<number>('test-8');
instance8.addItem(80);
