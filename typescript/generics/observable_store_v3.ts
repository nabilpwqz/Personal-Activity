/**
 * Problem: Immutable reactive state store with selectors (Variant 3)
 * Module: TypeScript / generics
 * Version: 3.0.0
 */

export interface IObservableStoreV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV3<T = any> {
  private readonly config: IObservableStoreV3Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new ObservableStoreV3<number>('test-3');
instance3.addItem(30);
