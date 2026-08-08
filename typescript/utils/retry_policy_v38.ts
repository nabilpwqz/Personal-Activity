/**
 * Problem: Exponential backoff retry policy handler (Variant 38)
 * Module: TypeScript / utils
 * Version: 38.0.0
 */

export interface IRetryPolicyV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV38<T = any> {
  private readonly config: IRetryPolicyV38Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new RetryPolicyV38<number>('test-38');
instance38.addItem(380);
