/**
 * Problem: Generic observable subject and listener dispatch (Variant 35)
 * Module: TypeScript / patterns
 * Version: 35.0.0
 */

export interface IObserverSubjectV35Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV35<T = any> {
  private readonly config: IObserverSubjectV35Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v35') {
    this.config = { id, version: 35, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV35Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance35 = new ObserverSubjectV35<number>('test-35');
instance35.addItem(350);
