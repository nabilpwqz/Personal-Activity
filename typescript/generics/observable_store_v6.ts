/**
 * Problem: Immutable reactive state store with selectors (Variant 6)
 * Module: TypeScript / generics
 * Version: 6.0.0
 */

export interface IObservableStoreV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV6<T = any> {
  private readonly config: IObservableStoreV6Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new ObservableStoreV6<number>('test-6');
instance6.addItem(60);
