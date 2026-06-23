/**
 * Problem: Extensible factory pattern with type mapping (Variant 20)
 * Module: TypeScript / patterns
 * Version: 20.0.0
 */

export interface IFactoryRegistryV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class FactoryRegistryV20<T = any> {
  private readonly config: IFactoryRegistryV20Config;
  private items: T[] = [];

  constructor(id: string = 'factory_registry-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IFactoryRegistryV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new FactoryRegistryV20<number>('test-20');
instance20.addItem(200);
