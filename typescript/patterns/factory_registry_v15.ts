/**
 * Problem: Extensible factory pattern with type mapping (Variant 15)
 * Module: TypeScript / patterns
 * Version: 15.0.0
 */

export interface IFactoryRegistryV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV15<T = any> {
  private readonly config: IFactoryRegistryV15Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new FactoryRegistryV15<number>('test-15');
instance15.addItem(150);
