/**
 * Problem: Generic observable subject and listener dispatch (Variant 19)
 * Module: TypeScript / patterns
 * Version: 19.0.0
 */

export interface IObserverSubjectV19Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV19<T = any> {
  private readonly config: IObserverSubjectV19Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v19') {
    this.config = { id, version: 19, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV19Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance19 = new ObserverSubjectV19<number>('test-19');
instance19.addItem(190);
