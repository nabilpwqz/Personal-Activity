/**
 * Problem: Nested partial patch object utility (Variant 20)
 * Module: TypeScript / utils
 * Version: 20.0.0
 */

export interface IDeepPartialV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV20<T = any> {
  private readonly config: IDeepPartialV20Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new DeepPartialV20<number>('test-20');
instance20.addItem(200);
