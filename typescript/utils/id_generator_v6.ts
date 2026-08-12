/**
 * Problem: Cryptographic UUID and ULID generator (Variant 6)
 * Module: TypeScript / utils
 * Version: 6.0.0
 */

export interface IIdGeneratorV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV6<T = any> {
  private readonly config: IIdGeneratorV6Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new IdGeneratorV6<number>('test-6');
instance6.addItem(60);
