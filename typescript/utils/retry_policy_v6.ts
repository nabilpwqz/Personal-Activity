/**
 * Problem: Exponential backoff retry policy handler (Variant 6)
 * Module: TypeScript / utils
 * Version: 6.0.0
 */

export interface IRetryPolicyV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV6<T = any> {
  private readonly config: IRetryPolicyV6Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new RetryPolicyV6<number>('test-6');
instance6.addItem(60);
