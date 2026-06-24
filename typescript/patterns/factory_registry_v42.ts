/**
 * Problem: Extensible factory pattern with type mapping (Variant 42)
 * Module: TypeScript / patterns
 * Version: 42.0.0
 */

export interface IFactoryRegistryV42Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV42<T = any> {
  private readonly config: IFactoryRegistryV42Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v42') {
    this.config = { id, version: 42, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV42Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance42 = new FactoryRegistryV42<number>('test-42');
instance42.addItem(420);
