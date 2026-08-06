/**
 * Problem: Exponential backoff retry policy handler (Variant 1)
 * Module: TypeScript / utils
 * Version: 1.0.0
 */

export interface IRetryPolicyV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV1<T = any> {
  private readonly config: IRetryPolicyV1Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new RetryPolicyV1<number>('test-1');
instance1.addItem(10);
