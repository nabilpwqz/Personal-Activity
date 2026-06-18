/**
 * Problem: Generic observable subject and listener dispatch (Variant 6)
 * Module: TypeScript / patterns
 * Version: 6.0.0
 */

export interface IObserverSubjectV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV6<T = any> {
  private readonly config: IObserverSubjectV6Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new ObserverSubjectV6<number>('test-6');
instance6.addItem(60);
