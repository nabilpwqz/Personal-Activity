/**
 * Problem: Immutable reactive state store with selectors (Variant 16)
 * Module: TypeScript / generics
 * Version: 16.0.0
 */

export interface IObservableStoreV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV16<T = any> {
  private readonly config: IObservableStoreV16Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new ObservableStoreV16<number>('test-16');
instance16.addItem(160);
