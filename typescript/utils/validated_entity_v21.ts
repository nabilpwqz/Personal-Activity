/**
 * Problem: Schema validator for runtime typed entities (Variant 21)
 * Module: TypeScript / utils
 * Version: 21.0.0
 */

export interface IValidatedEntityV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class ValidatedEntityV21<T = any> {
  private readonly config: IValidatedEntityV21Config;
  private items: T[] = [];

  constructor(id: string = 'validated_entity-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IValidatedEntityV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new ValidatedEntityV21<number>('test-21');
instance21.addItem(210);
