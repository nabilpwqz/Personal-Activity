/**
 * Problem: Extensible factory pattern with type mapping (Variant 26)
 * Module: TypeScript / patterns
 * Version: 26.0.0
 */

export interface IFactoryRegistryV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV26<T = any> {
  private readonly config: IFactoryRegistryV26Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new FactoryRegistryV26<number>('test-26');
instance26.addItem(260);
