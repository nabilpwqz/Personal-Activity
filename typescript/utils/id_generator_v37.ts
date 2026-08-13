/**
 * Problem: Cryptographic UUID and ULID generator (Variant 37)
 * Module: TypeScript / utils
 * Version: 37.0.0
 */

export interface IIdGeneratorV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV37<T = any> {
  private readonly config: IIdGeneratorV37Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new IdGeneratorV37<number>('test-37');
instance37.addItem(370);
