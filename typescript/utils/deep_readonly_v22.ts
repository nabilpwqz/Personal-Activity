/**
 * Problem: Recursive deep readonly mapped type helper (Variant 22)
 * Module: TypeScript / utils
 * Version: 22.0.0
 */

export interface IDeepReadonlyV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV22<T = any> {
  private readonly config: IDeepReadonlyV22Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new DeepReadonlyV22<number>('test-22');
instance22.addItem(220);
