/**
 * Problem: Nested partial patch object utility (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IDeepPartialV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV2<T = any> {
  private readonly config: IDeepPartialV2Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new DeepPartialV2<number>('test-2');
instance2.addItem(20);
