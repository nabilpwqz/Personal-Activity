/**
 * Problem: Generic observable subject and listener dispatch (Variant 40)
 * Module: TypeScript / patterns
 * Version: 40.0.0
 */

export interface IObserverSubjectV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObserverSubjectV40<T = any> {
  private readonly config: IObserverSubjectV40Config;
  private items: T[] = [];

  constructor(id: string = 'observer_subject-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObserverSubjectV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new ObserverSubjectV40<number>('test-40');
instance40.addItem(400);
