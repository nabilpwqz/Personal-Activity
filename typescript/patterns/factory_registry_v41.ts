/**
 * Problem: Extensible factory pattern with type mapping (Variant 41)
 * Module: TypeScript / patterns
 * Version: 41.0.0
 */

export interface IFactoryRegistryV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV41<T = any> {
  private readonly config: IFactoryRegistryV41Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new FactoryRegistryV41<number>('test-41');
instance41.addItem(410);
