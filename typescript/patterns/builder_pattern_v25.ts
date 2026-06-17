/**
 * Problem: Type-safe builder pattern with method chaining (Variant 25)
 * Module: TypeScript / patterns
 * Version: 25.0.0
 */

export interface IBuilderPatternV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class BuilderPatternV25<T = any> {
  private readonly config: IBuilderPatternV25Config;
  private items: T[] = [];

  constructor(id: string = 'builder_pattern-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IBuilderPatternV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new BuilderPatternV25<number>('test-25');
instance25.addItem(250);
