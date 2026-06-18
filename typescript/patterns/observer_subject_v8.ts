/**
 * Problem: Generic observable subject and listener dispatch (Variant 8)
 * Module: TypeScript / patterns
 * Version: 8.0.0
 */

export interface IObserverSubjectV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV8<T = any> {
  private readonly config: IObserverSubjectV8Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new ObserverSubjectV8<number>('test-8');
instance8.addItem(80);
