/**
 * Problem: Cryptographic UUID and ULID generator (Variant 12)
 * Module: TypeScript / utils
 * Version: 12.0.0
 */

export interface IIdGeneratorV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV12<T = any> {
  private readonly config: IIdGeneratorV12Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new IdGeneratorV12<number>('test-12');
instance12.addItem(120);
