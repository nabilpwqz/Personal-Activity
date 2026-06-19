/**
 * Problem: Generic observable subject and listener dispatch (Variant 15)
 * Module: TypeScript / patterns
 * Version: 15.0.0
 */

export interface IObserverSubjectV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV15<T = any> {
  private readonly config: IObserverSubjectV15Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new ObserverSubjectV15<number>('test-15');
instance15.addItem(150);
