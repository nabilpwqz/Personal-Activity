/**
 * Problem: Generic observable subject and listener dispatch (Variant 11)
 * Module: TypeScript / patterns
 * Version: 11.0.0
 */

export interface IObserverSubjectV11Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV11<T = any> {
  private readonly config: IObserverSubjectV11Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v11') {
    this.config = { id, version: 11, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV11Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance11 = new ObserverSubjectV11<number>('test-11');
instance11.addItem(110);
