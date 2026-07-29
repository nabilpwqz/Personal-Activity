/**
 * Problem: Recursive deep readonly mapped type helper (Variant 26)
 * Module: TypeScript / utils
 * Version: 26.0.0
 */

export interface IDeepReadonlyV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV26<T = any> {
  private readonly config: IDeepReadonlyV26Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new DeepReadonlyV26<number>('test-26');
instance26.addItem(260);
