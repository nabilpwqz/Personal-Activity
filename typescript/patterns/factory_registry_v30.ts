/**
 * Problem: Extensible factory pattern with type mapping (Variant 30)
 * Module: TypeScript / patterns
 * Version: 30.0.0
 */

export interface IFactoryRegistryV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV30<T = any> {
  private readonly config: IFactoryRegistryV30Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new FactoryRegistryV30<number>('test-30');
instance30.addItem(300);
