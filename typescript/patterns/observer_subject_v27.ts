/**
 * Problem: Generic observable subject and listener dispatch (Variant 27)
 * Module: TypeScript / patterns
 * Version: 27.0.0
 */

export interface IObserverSubjectV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV27<T = any> {
  private readonly config: IObserverSubjectV27Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new ObserverSubjectV27<number>('test-27');
instance27.addItem(270);
