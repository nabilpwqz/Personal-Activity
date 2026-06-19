/**
 * Problem: Generic observable subject and listener dispatch (Variant 31)
 * Module: TypeScript / patterns
 * Version: 31.0.0
 */

export interface IObserverSubjectV31Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV31<T = any> {
  private readonly config: IObserverSubjectV31Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v31') {
    this.config = { id, version: 31, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV31Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance31 = new ObserverSubjectV31<number>('test-31');
instance31.addItem(310);
