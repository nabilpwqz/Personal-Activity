/**
 * Problem: Cryptographic UUID and ULID generator (Variant 21)
 * Module: TypeScript / utils
 * Version: 21.0.0
 */

export interface IIdGeneratorV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV21<T = any> {
  private readonly config: IIdGeneratorV21Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new IdGeneratorV21<number>('test-21');
instance21.addItem(210);
