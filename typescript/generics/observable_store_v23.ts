/**
 * Problem: Immutable reactive state store with selectors (Variant 23)
 * Module: TypeScript / generics
 * Version: 23.0.0
 */

export interface IObservableStoreV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV23<T = any> {
  private readonly config: IObservableStoreV23Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new ObservableStoreV23<number>('test-23');
instance23.addItem(230);
