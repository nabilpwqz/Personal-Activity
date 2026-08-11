/**
 * Problem: Nested partial patch object utility (Variant 40)
 * Module: TypeScript / utils
 * Version: 40.0.0
 */

export interface IDeepPartialV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV40<T = any> {
  private readonly config: IDeepPartialV40Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new DeepPartialV40<number>('test-40');
instance40.addItem(400);
