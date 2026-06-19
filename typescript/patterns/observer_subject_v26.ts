/**
 * Problem: Generic observable subject and listener dispatch (Variant 26)
 * Module: TypeScript / patterns
 * Version: 26.0.0
 */

export interface IObserverSubjectV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV26<T = any> {
  private readonly config: IObserverSubjectV26Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new ObserverSubjectV26<number>('test-26');
instance26.addItem(260);
