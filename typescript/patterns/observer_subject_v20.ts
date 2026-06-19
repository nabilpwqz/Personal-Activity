/**
 * Problem: Generic observable subject and listener dispatch (Variant 20)
 * Module: TypeScript / patterns
 * Version: 20.0.0
 */

export interface IObserverSubjectV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV20<T = any> {
  private readonly config: IObserverSubjectV20Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new ObserverSubjectV20<number>('test-20');
instance20.addItem(200);
