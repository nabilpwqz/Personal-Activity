/**
 * Problem: Extensible factory pattern with type mapping (Variant 38)
 * Module: TypeScript / patterns
 * Version: 38.0.0
 */

export interface IFactoryRegistryV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV38<T = any> {
  private readonly config: IFactoryRegistryV38Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new FactoryRegistryV38<number>('test-38');
instance38.addItem(380);
