/**
 * Problem: Nested partial patch object utility (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IDeepPartialV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV3<T = any> {
  private readonly config: IDeepPartialV3Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new DeepPartialV3<number>('test-3');
instance3.addItem(30);
