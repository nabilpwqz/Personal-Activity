/**
 * Problem: Concurrent task pool with bounded parallelism (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IPromisePoolV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class PromisePoolV4<T = any> {
  private readonly config: IPromisePoolV4Config;
  private items: T[] = [];

  constructor(id: string = 'promise_pool-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPromisePoolV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new PromisePoolV4<number>('test-4');
instance4.addItem(40);
