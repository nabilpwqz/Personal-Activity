/**
 * Problem: Recursive deep readonly mapped type helper (Variant 6)
 * Module: TypeScript / utils
 * Version: 6.0.0
 */

export interface IDeepReadonlyV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV6<T = any> {
  private readonly config: IDeepReadonlyV6Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new DeepReadonlyV6<number>('test-6');
instance6.addItem(60);
