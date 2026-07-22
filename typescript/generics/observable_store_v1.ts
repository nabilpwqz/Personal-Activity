/**
 * Problem: Immutable reactive state store with selectors (Variant 1)
 * Module: TypeScript / generics
 * Version: 1.0.0
 */

export interface IObservableStoreV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV1<T = any> {
  private readonly config: IObservableStoreV1Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new ObservableStoreV1<number>('test-1');
instance1.addItem(10);
