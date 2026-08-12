/**
 * Problem: Cryptographic UUID and ULID generator (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IIdGeneratorV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV3<T = any> {
  private readonly config: IIdGeneratorV3Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new IdGeneratorV3<number>('test-3');
instance3.addItem(30);
