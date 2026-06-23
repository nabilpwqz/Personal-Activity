/**
 * Problem: Extensible factory pattern with type mapping (Variant 27)
 * Module: TypeScript / patterns
 * Version: 27.0.0
 */

export interface IFactoryRegistryV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV27<T = any> {
  private readonly config: IFactoryRegistryV27Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new FactoryRegistryV27<number>('test-27');
instance27.addItem(270);
