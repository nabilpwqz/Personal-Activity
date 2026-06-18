/**
 * Problem: Generic observable subject and listener dispatch (Variant 10)
 * Module: TypeScript / patterns
 * Version: 10.0.0
 */

export interface IObserverSubjectV10Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV10<T = any> {
  private readonly config: IObserverSubjectV10Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v10') {
    this.config = { id, version: 10, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV10Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance10 = new ObserverSubjectV10<number>('test-10');
instance10.addItem(100);
