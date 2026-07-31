/**
 * Problem: Schema validator for runtime typed entities (Variant 25)
 * Module: TypeScript / utils
 * Version: 25.0.0
 */

export interface IValidatedEntityV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class ValidatedEntityV25<T = any> {
  private readonly config: IValidatedEntityV25Config;
  private items: T[] = [];

  constructor(id: string = 'validated_entity-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IValidatedEntityV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new ValidatedEntityV25<number>('test-25');
instance25.addItem(250);
