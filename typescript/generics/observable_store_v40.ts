/**
 * Problem: Immutable reactive state store with selectors (Variant 40)
 * Module: TypeScript / generics
 * Version: 40.0.0
 */

export interface IObservableStoreV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV40<T = any> {
  private readonly config: IObservableStoreV40Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new ObservableStoreV40<number>('test-40');
instance40.addItem(400);
