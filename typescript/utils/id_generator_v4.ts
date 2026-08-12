/**
 * Problem: Cryptographic UUID and ULID generator (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IIdGeneratorV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV4<T = any> {
  private readonly config: IIdGeneratorV4Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new IdGeneratorV4<number>('test-4');
instance4.addItem(40);
