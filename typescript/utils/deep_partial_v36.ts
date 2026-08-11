/**
 * Problem: Nested partial patch object utility (Variant 36)
 * Module: TypeScript / utils
 * Version: 36.0.0
 */

export interface IDeepPartialV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV36<T = any> {
  private readonly config: IDeepPartialV36Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new DeepPartialV36<number>('test-36');
instance36.addItem(360);
