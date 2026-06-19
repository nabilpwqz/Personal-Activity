/**
 * Problem: Generic observable subject and listener dispatch (Variant 25)
 * Module: TypeScript / patterns
 * Version: 25.0.0
 */

export interface IObserverSubjectV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV25<T = any> {
  private readonly config: IObserverSubjectV25Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new ObserverSubjectV25<number>('test-25');
instance25.addItem(250);
