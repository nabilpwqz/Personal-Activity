/**
 * Problem: Recursive deep readonly mapped type helper (Variant 40)
 * Module: TypeScript / utils
 * Version: 40.0.0
 */

export interface IDeepReadonlyV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepReadonlyV40<T = any> {
  private readonly config: IDeepReadonlyV40Config;
  private items: T[] = [];

  constructor(id: string = 'deep_readonly-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepReadonlyV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new DeepReadonlyV40<number>('test-40');
instance40.addItem(400);
