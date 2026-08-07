/**
 * Problem: Exponential backoff retry policy handler (Variant 13)
 * Module: TypeScript / utils
 * Version: 13.0.0
 */

export interface IRetryPolicyV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV13<T = any> {
  private readonly config: IRetryPolicyV13Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new RetryPolicyV13<number>('test-13');
instance13.addItem(130);
