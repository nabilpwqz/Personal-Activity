/**
 * Problem: Nested partial patch object utility (Variant 25)
 * Module: TypeScript / utils
 * Version: 25.0.0
 */

export interface IDeepPartialV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV25<T = any> {
  private readonly config: IDeepPartialV25Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new DeepPartialV25<number>('test-25');
instance25.addItem(250);
