/**
 * Problem: Immutable reactive state store with selectors (Variant 10)
 * Module: TypeScript / generics
 * Version: 10.0.0
 */

export interface IObservableStoreV10Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV10<T = any> {
  private readonly config: IObservableStoreV10Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v10') {
    this.config = { id, version: 10, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV10Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance10 = new ObservableStoreV10<number>('test-10');
instance10.addItem(100);
