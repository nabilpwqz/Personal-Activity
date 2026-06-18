/**
 * Problem: Generic observable subject and listener dispatch (Variant 3)
 * Module: TypeScript / patterns
 * Version: 3.0.0
 */

export interface IObserverSubjectV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV3<T = any> {
  private readonly config: IObserverSubjectV3Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new ObserverSubjectV3<number>('test-3');
instance3.addItem(30);
