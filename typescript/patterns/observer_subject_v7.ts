/**
 * Problem: Generic observable subject and listener dispatch (Variant 7)
 * Module: TypeScript / patterns
 * Version: 7.0.0
 */

export interface IObserverSubjectV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV7<T = any> {
  private readonly config: IObserverSubjectV7Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new ObserverSubjectV7<number>('test-7');
instance7.addItem(70);
