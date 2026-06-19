/**
 * Problem: Generic observable subject and listener dispatch (Variant 21)
 * Module: TypeScript / patterns
 * Version: 21.0.0
 */

export interface IObserverSubjectV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV21<T = any> {
  private readonly config: IObserverSubjectV21Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new ObserverSubjectV21<number>('test-21');
instance21.addItem(210);
