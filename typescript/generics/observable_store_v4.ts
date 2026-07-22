/**
 * Problem: Immutable reactive state store with selectors (Variant 4)
 * Module: TypeScript / generics
 * Version: 4.0.0
 */

export interface IObservableStoreV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV4<T = any> {
  private readonly config: IObservableStoreV4Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new ObservableStoreV4<number>('test-4');
instance4.addItem(40);
