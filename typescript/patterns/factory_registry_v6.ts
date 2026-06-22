/**
 * Problem: Extensible factory pattern with type mapping (Variant 6)
 * Module: TypeScript / patterns
 * Version: 6.0.0
 */

export interface IFactoryRegistryV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV6<T = any> {
  private readonly config: IFactoryRegistryV6Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new FactoryRegistryV6<number>('test-6');
instance6.addItem(60);
