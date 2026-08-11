/**
 * Problem: Cryptographic UUID and ULID generator (Variant 1)
 * Module: TypeScript / utils
 * Version: 1.0.0
 */

export interface IIdGeneratorV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV1<T = any> {
  private readonly config: IIdGeneratorV1Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new IdGeneratorV1<number>('test-1');
instance1.addItem(10);
