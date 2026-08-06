/**
 * Problem: Exponential backoff retry policy handler (Variant 5)
 * Module: TypeScript / utils
 * Version: 5.0.0
 */

export interface IRetryPolicyV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV5<T = any> {
  private readonly config: IRetryPolicyV5Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new RetryPolicyV5<number>('test-5');
instance5.addItem(50);
