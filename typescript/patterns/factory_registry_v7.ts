/**
 * Problem: Extensible factory pattern with type mapping (Variant 7)
 * Module: TypeScript / patterns
 * Version: 7.0.0
 */

export interface IFactoryRegistryV7Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV7<T = any> {
  private readonly config: IFactoryRegistryV7Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v7') {
    this.config = { id, version: 7, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV7Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance7 = new FactoryRegistryV7<number>('test-7');
instance7.addItem(70);
