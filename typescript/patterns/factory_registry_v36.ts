/**
 * Problem: Extensible factory pattern with type mapping (Variant 36)
 * Module: TypeScript / patterns
 * Version: 36.0.0
 */

export interface IFactoryRegistryV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV36<T = any> {
  private readonly config: IFactoryRegistryV36Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new FactoryRegistryV36<number>('test-36');
instance36.addItem(360);
