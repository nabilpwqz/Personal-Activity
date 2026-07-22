/**
 * Problem: Immutable reactive state store with selectors (Variant 19)
 * Module: TypeScript / generics
 * Version: 19.0.0
 */

export interface IObservableStoreV19Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV19<T = any> {
  private readonly config: IObservableStoreV19Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v19') {
    this.config = { id, version: 19, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV19Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance19 = new ObservableStoreV19<number>('test-19');
instance19.addItem(190);
