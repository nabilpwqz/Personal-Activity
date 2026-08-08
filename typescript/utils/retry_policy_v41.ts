/**
 * Problem: Exponential backoff retry policy handler (Variant 41)
 * Module: TypeScript / utils
 * Version: 41.0.0
 */

export interface IRetryPolicyV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV41<T = any> {
  private readonly config: IRetryPolicyV41Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new RetryPolicyV41<number>('test-41');
instance41.addItem(410);
