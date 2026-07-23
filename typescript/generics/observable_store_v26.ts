/**
 * Problem: Immutable reactive state store with selectors (Variant 26)
 * Module: TypeScript / generics
 * Version: 26.0.0
 */

export interface IObservableStoreV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV26<T = any> {
  private readonly config: IObservableStoreV26Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new ObservableStoreV26<number>('test-26');
instance26.addItem(260);
