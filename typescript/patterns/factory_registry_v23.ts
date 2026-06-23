/**
 * Problem: Extensible factory pattern with type mapping (Variant 23)
 * Module: TypeScript / patterns
 * Version: 23.0.0
 */

export interface IFactoryRegistryV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV23<T = any> {
  private readonly config: IFactoryRegistryV23Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new FactoryRegistryV23<number>('test-23');
instance23.addItem(230);
