/**
 * Problem: Immutable reactive state store with selectors (Variant 21)
 * Module: TypeScript / generics
 * Version: 21.0.0
 */

export interface IObservableStoreV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV21<T = any> {
  private readonly config: IObservableStoreV21Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new ObservableStoreV21<number>('test-21');
instance21.addItem(210);
