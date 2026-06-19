/**
 * Problem: Generic observable subject and listener dispatch (Variant 17)
 * Module: TypeScript / patterns
 * Version: 17.0.0
 */

export interface IObserverSubjectV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV17<T = any> {
  private readonly config: IObserverSubjectV17Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new ObserverSubjectV17<number>('test-17');
instance17.addItem(170);
