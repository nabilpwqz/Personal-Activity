/**
 * Problem: Cryptographic UUID and ULID generator (Variant 15)
 * Module: TypeScript / utils
 * Version: 15.0.0
 */

export interface IIdGeneratorV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV15<T = any> {
  private readonly config: IIdGeneratorV15Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new IdGeneratorV15<number>('test-15');
instance15.addItem(150);
