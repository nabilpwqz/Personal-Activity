/**
 * Problem: Schema validator for runtime typed entities (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IValidatedEntityV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class ValidatedEntityV2<T = any> {
  private readonly config: IValidatedEntityV2Config;
  private items: T[] = [];

  constructor(id: string = 'validated_entity-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IValidatedEntityV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new ValidatedEntityV2<number>('test-2');
instance2.addItem(20);
