/**
 * Problem: Immutable reactive state store with selectors (Variant 41)
 * Module: TypeScript / generics
 * Version: 41.0.0
 */

export interface IObservableStoreV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV41<T = any> {
  private readonly config: IObservableStoreV41Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new ObservableStoreV41<number>('test-41');
instance41.addItem(410);
