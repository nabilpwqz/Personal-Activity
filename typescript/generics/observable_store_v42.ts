/**
 * Problem: Immutable reactive state store with selectors (Variant 42)
 * Module: TypeScript / generics
 * Version: 42.0.0
 */

export interface IObservableStoreV42Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV42<T = any> {
  private readonly config: IObservableStoreV42Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v42') {
    this.config = { id, version: 42, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV42Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance42 = new ObservableStoreV42<number>('test-42');
instance42.addItem(420);
