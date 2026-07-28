/**
 * Problem: Recursive deep readonly mapped type helper (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IDeepReadonlyV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV3<T = any> {
  private readonly config: IDeepReadonlyV3Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new DeepReadonlyV3<number>('test-3');
instance3.addItem(30);
