/**
 * Problem: Nested partial patch object utility (Variant 21)
 * Module: TypeScript / utils
 * Version: 21.0.0
 */

export interface IDeepPartialV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV21<T = any> {
  private readonly config: IDeepPartialV21Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new DeepPartialV21<number>('test-21');
instance21.addItem(210);
