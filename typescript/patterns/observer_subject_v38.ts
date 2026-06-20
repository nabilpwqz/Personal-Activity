/**
 * Problem: Generic observable subject and listener dispatch (Variant 38)
 * Module: TypeScript / patterns
 * Version: 38.0.0
 */

export interface IObserverSubjectV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV38<T = any> {
  private readonly config: IObserverSubjectV38Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new ObserverSubjectV38<number>('test-38');
instance38.addItem(380);
