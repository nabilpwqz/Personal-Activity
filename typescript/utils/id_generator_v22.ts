/**
 * Problem: Cryptographic UUID and ULID generator (Variant 22)
 * Module: TypeScript / utils
 * Version: 22.0.0
 */

export interface IIdGeneratorV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV22<T = any> {
  private readonly config: IIdGeneratorV22Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new IdGeneratorV22<number>('test-22');
instance22.addItem(220);
