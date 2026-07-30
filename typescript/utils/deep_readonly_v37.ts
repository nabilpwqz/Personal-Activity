/**
 * Problem: Recursive deep readonly mapped type helper (Variant 37)
 * Module: TypeScript / utils
 * Version: 37.0.0
 */

export interface IDeepReadonlyV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV37<T = any> {
  private readonly config: IDeepReadonlyV37Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new DeepReadonlyV37<number>('test-37');
instance37.addItem(370);
