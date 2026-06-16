/**
 * Problem: Type-safe builder pattern with method chaining (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface IBuilderPatternV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class BuilderPatternV4<T = any> {
  private readonly config: IBuilderPatternV4Config;
  private items: T[] = [];

  constructor(id: string = 'builder_pattern-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBuilderPatternV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new BuilderPatternV4<number>('test-4');
instance4.addItem(40);
