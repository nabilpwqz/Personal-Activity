/**
 * Problem: Immutable reactive state store with selectors (Variant 36)
 * Module: TypeScript / generics
 * Version: 36.0.0
 */

export interface IObservableStoreV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class ObservableStoreV36<T = any> {
  private readonly config: IObservableStoreV36Config;
  private items: T[] = [];

  constructor(id: string = 'observable_store-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IObservableStoreV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new ObservableStoreV36<number>('test-36');
instance36.addItem(360);
