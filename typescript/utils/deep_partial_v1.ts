/**
 * Problem: Nested partial patch object utility (Variant 1)
 * Module: TypeScript / utils
 * Version: 1.0.0
 */

export interface IDeepPartialV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV1<T = any> {
  private readonly config: IDeepPartialV1Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new DeepPartialV1<number>('test-1');
instance1.addItem(10);
