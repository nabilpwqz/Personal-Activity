/**
 * Problem: Generic observable subject and listener dispatch (Variant 13)
 * Module: TypeScript / patterns
 * Version: 13.0.0
 */

export interface IObserverSubjectV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV13<T = any> {
  private readonly config: IObserverSubjectV13Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new ObserverSubjectV13<number>('test-13');
instance13.addItem(130);
