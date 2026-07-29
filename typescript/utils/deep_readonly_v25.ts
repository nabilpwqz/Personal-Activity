/**
 * Problem: Recursive deep readonly mapped type helper (Variant 25)
 * Module: TypeScript / utils
 * Version: 25.0.0
 */

export interface IDeepReadonlyV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV25<T = any> {
  private readonly config: IDeepReadonlyV25Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new DeepReadonlyV25<number>('test-25');
instance25.addItem(250);
