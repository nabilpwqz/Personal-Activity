/**
 * Problem: Generic observable subject and listener dispatch (Variant 30)
 * Module: TypeScript / patterns
 * Version: 30.0.0
 */

export interface IObserverSubjectV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV30<T = any> {
  private readonly config: IObserverSubjectV30Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new ObserverSubjectV30<number>('test-30');
instance30.addItem(300);
