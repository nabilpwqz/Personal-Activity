/**
 * Problem: Generic observable subject and listener dispatch (Variant 16)
 * Module: TypeScript / patterns
 * Version: 16.0.0
 */

export interface IObserverSubjectV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV16<T = any> {
  private readonly config: IObserverSubjectV16Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new ObserverSubjectV16<number>('test-16');
instance16.addItem(160);
