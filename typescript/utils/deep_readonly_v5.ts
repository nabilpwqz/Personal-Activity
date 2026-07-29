/**
 * Problem: Recursive deep readonly mapped type helper (Variant 5)
 * Module: TypeScript / utils
 * Version: 5.0.0
 */

export interface IDeepReadonlyV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV5<T = any> {
  private readonly config: IDeepReadonlyV5Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new DeepReadonlyV5<number>('test-5');
instance5.addItem(50);
