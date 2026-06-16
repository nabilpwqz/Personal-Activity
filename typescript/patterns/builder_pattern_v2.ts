/**
 * Problem: Type-safe builder pattern with method chaining (Variant 2)
 * Module: TypeScript / patterns
 * Version: 2.0.0
 */

export interface IBuilderPatternV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class BuilderPatternV2<T = any> {
  private readonly config: IBuilderPatternV2Config;
  private items: T[] = [];

  constructor(id: string = 'builder_pattern-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBuilderPatternV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new BuilderPatternV2<number>('test-2');
instance2.addItem(20);
