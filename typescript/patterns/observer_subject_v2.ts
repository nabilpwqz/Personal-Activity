/**
 * Problem: Generic observable subject and listener dispatch (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface IObserverSubjectV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV2<T = any> {
  private readonly config: IObserverSubjectV2Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new ObserverSubjectV2<number>('test-2');
instance2.addItem(20);
