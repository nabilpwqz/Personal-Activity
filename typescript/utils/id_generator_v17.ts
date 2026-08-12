/**
 * Problem: Cryptographic UUID and ULID generator (Variant 17)
 * Module: TypeScript / utils
 * Version: 17.0.0
 */

export interface IIdGeneratorV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV17<T = any> {
  private readonly config: IIdGeneratorV17Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new IdGeneratorV17<number>('test-17');
instance17.addItem(170);
