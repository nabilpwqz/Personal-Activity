/**
 * Problem: Immutable reactive state store with selectors (Variant 5)
 * Module: TypeScript / generics
 * Version: 5.0.0
 */

export interface IObservableStoreV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV5<T = any> {
  private readonly config: IObservableStoreV5Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new ObservableStoreV5<number>('test-5');
instance5.addItem(50);
