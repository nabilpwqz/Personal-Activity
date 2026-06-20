/**
 * Problem: Generic observable subject and listener dispatch (Variant 39)
 * Module: TypeScript / patterns
 * Version: 39.0.0
 */

export interface IObserverSubjectV39Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV39<T = any> {
  private readonly config: IObserverSubjectV39Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v39') {
    this.config = { id, version: 39, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV39Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance39 = new ObserverSubjectV39<number>('test-39');
instance39.addItem(390);
