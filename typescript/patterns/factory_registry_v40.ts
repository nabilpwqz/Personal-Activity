/**
 * Problem: Extensible factory pattern with type mapping (Variant 40)
 * Module: TypeScript / patterns
 * Version: 40.0.0
 */

export interface IFactoryRegistryV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV40<T = any> {
  private readonly config: IFactoryRegistryV40Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new FactoryRegistryV40<number>('test-40');
instance40.addItem(400);
