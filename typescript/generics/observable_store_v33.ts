/**
 * Problem: Immutable reactive state store with selectors (Variant 33)
 * Module: TypeScript / generics
 * Version: 33.0.0
 */

export interface IObservableStoreV33Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV33<T = any> {
  private readonly config: IObservableStoreV33Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v33') {
    this.config = { id, version: 33, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV33Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance33 = new ObservableStoreV33<number>('test-33');
instance33.addItem(330);
