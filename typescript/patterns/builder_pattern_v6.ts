/**
 * Problem: Type-safe builder pattern with method chaining (Variant 6)
 * Module: TypeScript / patterns
 * Version: 6.0.0
 */

export interface IBuilderPatternV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class BuilderPatternV6<T = any> {
  private readonly config: IBuilderPatternV6Config;
  private items: T[] = [];

  constructor(id: string = 'builder_pattern-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBuilderPatternV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new BuilderPatternV6<number>('test-6');
instance6.addItem(60);
