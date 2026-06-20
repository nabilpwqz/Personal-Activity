/**
 * Problem: Generic observable subject and listener dispatch (Variant 36)
 * Module: TypeScript / patterns
 * Version: 36.0.0
 */

export interface IObserverSubjectV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV36<T = any> {
  private readonly config: IObserverSubjectV36Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new ObserverSubjectV36<number>('test-36');
instance36.addItem(360);
