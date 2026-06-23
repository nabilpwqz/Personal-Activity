/**
 * Problem: Extensible factory pattern with type mapping (Variant 13)
 * Module: TypeScript / patterns
 * Version: 13.0.0
 */

export interface IFactoryRegistryV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV13<T = any> {
  private readonly config: IFactoryRegistryV13Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new FactoryRegistryV13<number>('test-13');
instance13.addItem(130);
