/**
 * Problem: Extensible factory pattern with type mapping (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface IFactoryRegistryV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV2<T = any> {
  private readonly config: IFactoryRegistryV2Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new FactoryRegistryV2<number>('test-2');
instance2.addItem(20);
