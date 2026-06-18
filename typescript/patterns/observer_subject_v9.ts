/**
 * Problem: Generic observable subject and listener dispatch (Variant 9)
 * Module: TypeScript / patterns
 * Version: 9.0.0
 */

export interface IObserverSubjectV9Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV9<T = any> {
  private readonly config: IObserverSubjectV9Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v9') {
    this.config = { id, version: 9, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV9Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance9 = new ObserverSubjectV9<number>('test-9');
instance9.addItem(90);
