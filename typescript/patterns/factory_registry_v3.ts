/**
 * Problem: Extensible factory pattern with type mapping (Variant 3)
 * Module: TypeScript / patterns
 * Version: 3.0.0
 */

export interface IFactoryRegistryV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV3<T = any> {
  private readonly config: IFactoryRegistryV3Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new FactoryRegistryV3<number>('test-3');
instance3.addItem(30);
