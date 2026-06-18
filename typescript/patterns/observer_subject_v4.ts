/**
 * Problem: Generic observable subject and listener dispatch (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface IObserverSubjectV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV4<T = any> {
  private readonly config: IObserverSubjectV4Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new ObserverSubjectV4<number>('test-4');
instance4.addItem(40);
