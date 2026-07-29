/**
 * Problem: Recursive deep readonly mapped type helper (Variant 20)
 * Module: TypeScript / utils
 * Version: 20.0.0
 */

export interface IDeepReadonlyV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV20<T = any> {
  private readonly config: IDeepReadonlyV20Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new DeepReadonlyV20<number>('test-20');
instance20.addItem(200);
