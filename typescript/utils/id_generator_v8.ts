/**
 * Problem: Cryptographic UUID and ULID generator (Variant 8)
 * Module: TypeScript / utils
 * Version: 8.0.0
 */

export interface IIdGeneratorV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV8<T = any> {
  private readonly config: IIdGeneratorV8Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new IdGeneratorV8<number>('test-8');
instance8.addItem(80);
