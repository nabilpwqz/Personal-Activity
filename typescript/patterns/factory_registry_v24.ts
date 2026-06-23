/**
 * Problem: Extensible factory pattern with type mapping (Variant 24)
 * Module: TypeScript / patterns
 * Version: 24.0.0
 */

export interface IFactoryRegistryV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV24<T = any> {
  private readonly config: IFactoryRegistryV24Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new FactoryRegistryV24<number>('test-24');
instance24.addItem(240);
