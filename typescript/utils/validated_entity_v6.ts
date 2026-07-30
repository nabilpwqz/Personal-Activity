/**
 * Problem: Schema validator for runtime typed entities (Variant 6)
 * Module: TypeScript / utils
 * Version: 6.0.0
 */

export interface IValidatedEntityV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class ValidatedEntityV6<T = any> {
  private readonly config: IValidatedEntityV6Config;
  private items: T[] = [];

  constructor(id: string = 'validated_entity-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IValidatedEntityV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new ValidatedEntityV6<number>('test-6');
instance6.addItem(60);
