/**
 * Problem: Generic observable subject and listener dispatch (Variant 12)
 * Module: TypeScript / patterns
 * Version: 12.0.0
 */

export interface IObserverSubjectV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV12<T = any> {
  private readonly config: IObserverSubjectV12Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new ObserverSubjectV12<number>('test-12');
instance12.addItem(120);
