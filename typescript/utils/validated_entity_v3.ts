/**
 * Problem: Schema validator for runtime typed entities (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IValidatedEntityV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class ValidatedEntityV3<T = any> {
  private readonly config: IValidatedEntityV3Config;
  private items: T[] = [];

  constructor(id: string = 'validated_entity-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IValidatedEntityV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new ValidatedEntityV3<number>('test-3');
instance3.addItem(30);
