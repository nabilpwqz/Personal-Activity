/**
 * Problem: Recursive deep readonly mapped type helper (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IDeepReadonlyV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV2<T = any> {
  private readonly config: IDeepReadonlyV2Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new DeepReadonlyV2<number>('test-2');
instance2.addItem(20);
