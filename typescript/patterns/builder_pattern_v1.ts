/**
 * Problem: Type-safe builder pattern with method chaining (Variant 1)
 * Module: TypeScript / patterns
 * Version: 1.0.0
 */

export interface IBuilderPatternV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class BuilderPatternV1<T = any> {
  private readonly config: IBuilderPatternV1Config;
  private items: T[] = [];

  constructor(id: string = 'builder_pattern-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBuilderPatternV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new BuilderPatternV1<number>('test-1');
instance1.addItem(10);
