/**
 * Problem: Nested partial patch object utility (Variant 17)
 * Module: TypeScript / utils
 * Version: 17.0.0
 */

export interface IDeepPartialV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class DeepPartialV17<T = any> {
  private readonly config: IDeepPartialV17Config;
  private items: T[] = [];

  constructor(id: string = 'deep_partial-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IDeepPartialV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new DeepPartialV17<number>('test-17');
instance17.addItem(170);
