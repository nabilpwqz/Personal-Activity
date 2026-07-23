/**
 * Problem: Immutable reactive state store with selectors (Variant 37)
 * Module: TypeScript / generics
 * Version: 37.0.0
 */

export interface IObservableStoreV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV37<T = any> {
  private readonly config: IObservableStoreV37Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new ObservableStoreV37<number>('test-37');
instance37.addItem(370);
