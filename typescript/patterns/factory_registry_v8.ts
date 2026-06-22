/**
 * Problem: Extensible factory pattern with type mapping (Variant 8)
 * Module: TypeScript / patterns
 * Version: 8.0.0
 */

export interface IFactoryRegistryV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV8<T = any> {
  private readonly config: IFactoryRegistryV8Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new FactoryRegistryV8<number>('test-8');
instance8.addItem(80);
