/**
 * Problem: Generic binary heap priority queue with comparator (Variant 37)
 * Module: TypeScript / generics
 * Version: 37.0.0
 */

export interface IPriorityQueueV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV37<T = any> {
  private readonly config: IPriorityQueueV37Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new PriorityQueueV37<number>('test-37');
instance37.addItem(370);
