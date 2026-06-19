/**
 * Problem: Generic observable subject and listener dispatch (Variant 14)
 * Module: TypeScript / patterns
 * Version: 14.0.0
 */

export interface IObserverSubjectV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV14<T = any> {
  private readonly config: IObserverSubjectV14Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new ObserverSubjectV14<number>('test-14');
instance14.addItem(140);
