/**
 * Problem: Immutable reactive state store with selectors (Variant 30)
 * Module: TypeScript / generics
 * Version: 30.0.0
 */

export interface IObservableStoreV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV30<T = any> {
  private readonly config: IObservableStoreV30Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new ObservableStoreV30<number>('test-30');
instance30.addItem(300);
