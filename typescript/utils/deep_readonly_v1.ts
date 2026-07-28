/**
 * Problem: Recursive deep readonly mapped type helper (Variant 1)
 * Module: TypeScript / utils
 * Version: 1.0.0
 */

export interface IDeepReadonlyV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV1<T = any> {
  private readonly config: IDeepReadonlyV1Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new DeepReadonlyV1<number>('test-1');
instance1.addItem(10);
