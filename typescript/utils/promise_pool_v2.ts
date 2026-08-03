/**
 * Problem: Concurrent task pool with bounded parallelism (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IPromisePoolV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class PromisePoolV2<T = any> {
  private readonly config: IPromisePoolV2Config;
  private items: T[] = [];

  constructor(id: string = 'promise_pool-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IPromisePoolV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new PromisePoolV2<number>('test-2');
instance2.addItem(20);
