/**
 * Problem: Generic observable subject and listener dispatch (Variant 33)
 * Module: TypeScript / patterns
 * Version: 33.0.0
 */

export interface IObserverSubjectV33Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV33<T = any> {
  private readonly config: IObserverSubjectV33Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v33') {
    this.config = { id, version: 33, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV33Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance33 = new ObserverSubjectV33<number>('test-33');
instance33.addItem(330);
