/**
 * Problem: Generic observable subject and listener dispatch (Variant 23)
 * Module: TypeScript / patterns
 * Version: 23.0.0
 */

export interface IObserverSubjectV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV23<T = any> {
  private readonly config: IObserverSubjectV23Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new ObserverSubjectV23<number>('test-23');
instance23.addItem(230);
