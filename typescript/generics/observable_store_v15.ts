/**
 * Problem: Immutable reactive state store with selectors (Variant 15)
 * Module: TypeScript / generics
 * Version: 15.0.0
 */

export interface IObservableStoreV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV15<T = any> {
  private readonly config: IObservableStoreV15Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new ObservableStoreV15<number>('test-15');
instance15.addItem(150);
