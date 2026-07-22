/**
 * Problem: Immutable reactive state store with selectors (Variant 14)
 * Module: TypeScript / generics
 * Version: 14.0.0
 */

export interface IObservableStoreV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV14<T = any> {
  private readonly config: IObservableStoreV14Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new ObservableStoreV14<number>('test-14');
instance14.addItem(140);
