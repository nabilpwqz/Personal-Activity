/**
 * Problem: Nested partial patch object utility (Variant 6)
 * Module: TypeScript / utils
 * Version: 6.0.0
 */

export interface IDeepPartialV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV6<T = any> {
  private readonly config: IDeepPartialV6Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new DeepPartialV6<number>('test-6');
instance6.addItem(60);
