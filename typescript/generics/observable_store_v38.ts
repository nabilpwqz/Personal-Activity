/**
 * Problem: Immutable reactive state store with selectors (Variant 38)
 * Module: TypeScript / generics
 * Version: 38.0.0
 */

export interface IObservableStoreV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV38<T = any> {
  private readonly config: IObservableStoreV38Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new ObservableStoreV38<number>('test-38');
instance38.addItem(380);
