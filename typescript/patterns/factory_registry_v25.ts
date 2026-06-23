/**
 * Problem: Extensible factory pattern with type mapping (Variant 25)
 * Module: TypeScript / patterns
 * Version: 25.0.0
 */

export interface IFactoryRegistryV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV25<T = any> {
  private readonly config: IFactoryRegistryV25Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new FactoryRegistryV25<number>('test-25');
instance25.addItem(250);
