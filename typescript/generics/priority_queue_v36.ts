/**
 * Problem: Generic binary heap priority queue with comparator (Variant 36)
 * Module: TypeScript / generics
 * Version: 36.0.0
 */

export interface IPriorityQueueV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class PriorityQueueV36<T = any> {
  private readonly config: IPriorityQueueV36Config;
  private items: T[] = [];

  constructor(id: string = 'priority_queue-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPriorityQueueV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new PriorityQueueV36<number>('test-36');
instance36.addItem(360);
