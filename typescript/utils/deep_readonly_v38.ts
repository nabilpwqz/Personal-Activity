/**
 * Problem: Recursive deep readonly mapped type helper (Variant 38)
 * Module: TypeScript / utils
 * Version: 38.0.0
 */

export interface IDeepReadonlyV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV38<T = any> {
  private readonly config: IDeepReadonlyV38Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new DeepReadonlyV38<number>('test-38');
instance38.addItem(380);
