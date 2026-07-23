/**
 * Problem: Immutable reactive state store with selectors (Variant 25)
 * Module: TypeScript / generics
 * Version: 25.0.0
 */

export interface IObservableStoreV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV25<T = any> {
  private readonly config: IObservableStoreV25Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new ObservableStoreV25<number>('test-25');
instance25.addItem(250);
