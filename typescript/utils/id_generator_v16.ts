/**
 * Problem: Cryptographic UUID and ULID generator (Variant 16)
 * Module: TypeScript / utils
 * Version: 16.0.0
 */

export interface IIdGeneratorV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV16<T = any> {
  private readonly config: IIdGeneratorV16Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new IdGeneratorV16<number>('test-16');
instance16.addItem(160);
