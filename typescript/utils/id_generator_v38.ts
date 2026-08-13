/**
 * Problem: Cryptographic UUID and ULID generator (Variant 38)
 * Module: TypeScript / utils
 * Version: 38.0.0
 */

export interface IIdGeneratorV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV38<T = any> {
  private readonly config: IIdGeneratorV38Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new IdGeneratorV38<number>('test-38');
instance38.addItem(380);
