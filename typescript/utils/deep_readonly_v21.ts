/**
 * Problem: Recursive deep readonly mapped type helper (Variant 21)
 * Module: TypeScript / utils
 * Version: 21.0.0
 */

export interface IDeepReadonlyV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV21<T = any> {
  private readonly config: IDeepReadonlyV21Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new DeepReadonlyV21<number>('test-21');
instance21.addItem(210);
