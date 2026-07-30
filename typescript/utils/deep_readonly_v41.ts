/**
 * Problem: Recursive deep readonly mapped type helper (Variant 41)
 * Module: TypeScript / utils
 * Version: 41.0.0
 */

export interface IDeepReadonlyV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV41<T = any> {
  private readonly config: IDeepReadonlyV41Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new DeepReadonlyV41<number>('test-41');
instance41.addItem(410);
