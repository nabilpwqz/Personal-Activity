/**
 * Problem: Recursive deep readonly mapped type helper (Variant 12)
 * Module: TypeScript / utils
 * Version: 12.0.0
 */

export interface IDeepReadonlyV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV12<T = any> {
  private readonly config: IDeepReadonlyV12Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new DeepReadonlyV12<number>('test-12');
instance12.addItem(120);
