/**
 * Problem: Generic observable subject and listener dispatch (Variant 1)
 * Module: TypeScript / patterns
 * Version: 1.0.0
 */

export interface IObserverSubjectV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV1<T = any> {
  private readonly config: IObserverSubjectV1Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new ObserverSubjectV1<number>('test-1');
instance1.addItem(10);
