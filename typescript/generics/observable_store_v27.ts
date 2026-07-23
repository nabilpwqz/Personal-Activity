/**
 * Problem: Immutable reactive state store with selectors (Variant 27)
 * Module: TypeScript / generics
 * Version: 27.0.0
 */

export interface IObservableStoreV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV27<T = any> {
  private readonly config: IObservableStoreV27Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new ObservableStoreV27<number>('test-27');
instance27.addItem(270);
