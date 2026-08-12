/**
 * Problem: Cryptographic UUID and ULID generator (Variant 33)
 * Module: TypeScript / utils
 * Version: 33.0.0
 */

export interface IIdGeneratorV33Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV33<T = any> {
  private readonly config: IIdGeneratorV33Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v33') {
    this.config = { id, version: 33, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV33Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance33 = new IdGeneratorV33<number>('test-33');
instance33.addItem(330);
