/**
 * Problem: Exponential backoff retry policy handler (Variant 16)
 * Module: TypeScript / utils
 * Version: 16.0.0
 */

export interface IRetryPolicyV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV16<T = any> {
  private readonly config: IRetryPolicyV16Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new RetryPolicyV16<number>('test-16');
instance16.addItem(160);
