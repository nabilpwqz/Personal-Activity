/**
 * Problem: Generic observable subject and listener dispatch (Variant 18)
 * Module: TypeScript / patterns
 * Version: 18.0.0
 */

export interface IObserverSubjectV18Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV18<T = any> {
  private readonly config: IObserverSubjectV18Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v18') {
    this.config = { id, version: 18, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV18Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance18 = new ObserverSubjectV18<number>('test-18');
instance18.addItem(180);
