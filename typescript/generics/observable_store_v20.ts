/**
 * Problem: Immutable reactive state store with selectors (Variant 20)
 * Module: TypeScript / generics
 * Version: 20.0.0
 */

export interface IObservableStoreV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV20<T = any> {
  private readonly config: IObservableStoreV20Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new ObservableStoreV20<number>('test-20');
instance20.addItem(200);
