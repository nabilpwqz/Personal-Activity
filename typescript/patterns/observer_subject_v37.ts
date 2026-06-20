/**
 * Problem: Generic observable subject and listener dispatch (Variant 37)
 * Module: TypeScript / patterns
 * Version: 37.0.0
 */

export interface IObserverSubjectV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV37<T = any> {
  private readonly config: IObserverSubjectV37Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new ObserverSubjectV37<number>('test-37');
instance37.addItem(370);
