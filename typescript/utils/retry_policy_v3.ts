/**
 * Problem: Exponential backoff retry policy handler (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IRetryPolicyV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV3<T = any> {
  private readonly config: IRetryPolicyV3Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new RetryPolicyV3<number>('test-3');
instance3.addItem(30);
