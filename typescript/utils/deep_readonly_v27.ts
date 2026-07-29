/**
 * Problem: Recursive deep readonly mapped type helper (Variant 27)
 * Module: TypeScript / utils
 * Version: 27.0.0
 */

export interface IDeepReadonlyV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV27<T = any> {
  private readonly config: IDeepReadonlyV27Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new DeepReadonlyV27<number>('test-27');
instance27.addItem(270);
