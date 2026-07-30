/**
 * Problem: Schema validator for runtime typed entities (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IValidatedEntityV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class ValidatedEntityV4<T = any> {
  private readonly config: IValidatedEntityV4Config;
  private items: T[] = [];

  constructor(id: string = 'validated_entity-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IValidatedEntityV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new ValidatedEntityV4<number>('test-4');
instance4.addItem(40);
