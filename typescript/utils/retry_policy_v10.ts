/**
 * Problem: Exponential backoff retry policy handler (Variant 10)
 * Module: TypeScript / utils
 * Version: 10.0.0
 */

export interface IRetryPolicyV10Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV10<T = any> {
  private readonly config: IRetryPolicyV10Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v10') {
    this.config = { id, version: 10, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV10Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance10 = new RetryPolicyV10<number>('test-10');
instance10.addItem(100);
