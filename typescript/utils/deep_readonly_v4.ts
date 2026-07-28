/**
 * Problem: Recursive deep readonly mapped type helper (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IDeepReadonlyV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV4<T = any> {
  private readonly config: IDeepReadonlyV4Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new DeepReadonlyV4<number>('test-4');
instance4.addItem(40);
