/**
 * Problem: Cryptographic UUID and ULID generator (Variant 36)
 * Module: TypeScript / utils
 * Version: 36.0.0
 */

export interface IIdGeneratorV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class IdGeneratorV36<T = any> {
  private readonly config: IIdGeneratorV36Config;
  private items: T[] = [];

  constructor(id: string = 'id_generator-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IIdGeneratorV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new IdGeneratorV36<number>('test-36');
instance36.addItem(360);
