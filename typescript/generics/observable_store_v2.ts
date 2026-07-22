/**
 * Problem: Immutable reactive state store with selectors (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface IObservableStoreV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV2<T = any> {
  private readonly config: IObservableStoreV2Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new ObservableStoreV2<number>('test-2');
instance2.addItem(20);
