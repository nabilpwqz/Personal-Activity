/**
 * Problem: Generic observable subject and listener dispatch (Variant 24)
 * Module: TypeScript / patterns
 * Version: 24.0.0
 */

export interface IObserverSubjectV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV24<T = any> {
  private readonly config: IObserverSubjectV24Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new ObserverSubjectV24<number>('test-24');
instance24.addItem(240);
