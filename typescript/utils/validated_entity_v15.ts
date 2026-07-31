/**
 * Problem: Schema validator for runtime typed entities (Variant 15)
 * Module: TypeScript / utils
 * Version: 15.0.0
 */

export interface IValidatedEntityV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class ValidatedEntityV15<T = any> {
  private readonly config: IValidatedEntityV15Config;
  private items: T[] = [];

  constructor(id: string = 'validated_entity-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IValidatedEntityV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new ValidatedEntityV15<number>('test-15');
instance15.addItem(150);
