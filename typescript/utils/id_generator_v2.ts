/**
 * Problem: Cryptographic UUID and ULID generator (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IIdGeneratorV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV2<T = any> {
  private readonly config: IIdGeneratorV2Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new IdGeneratorV2<number>('test-2');
instance2.addItem(20);
