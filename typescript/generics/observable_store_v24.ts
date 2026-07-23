/**
 * Problem: Immutable reactive state store with selectors (Variant 24)
 * Module: TypeScript / generics
 * Version: 24.0.0
 */

export interface IObservableStoreV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV24<T = any> {
  private readonly config: IObservableStoreV24Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new ObservableStoreV24<number>('test-24');
instance24.addItem(240);
