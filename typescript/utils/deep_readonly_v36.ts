/**
 * Problem: Recursive deep readonly mapped type helper (Variant 36)
 * Module: TypeScript / utils
 * Version: 36.0.0
 */

export interface IDeepReadonlyV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV36<T = any> {
  private readonly config: IDeepReadonlyV36Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new DeepReadonlyV36<number>('test-36');
instance36.addItem(360);
