/**
 * Problem: Immutable reactive state store with selectors (Variant 12)
 * Module: TypeScript / generics
 * Version: 12.0.0
 */

export interface IObservableStoreV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV12<T = any> {
  private readonly config: IObservableStoreV12Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new ObservableStoreV12<number>('test-12');
instance12.addItem(120);
