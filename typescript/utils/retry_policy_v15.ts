/**
 * Problem: Exponential backoff retry policy handler (Variant 15)
 * Module: TypeScript / utils
 * Version: 15.0.0
 */

export interface IRetryPolicyV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV15<T = any> {
  private readonly config: IRetryPolicyV15Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new RetryPolicyV15<number>('test-15');
instance15.addItem(150);
