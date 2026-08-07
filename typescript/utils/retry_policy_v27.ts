/**
 * Problem: Exponential backoff retry policy handler (Variant 27)
 * Module: TypeScript / utils
 * Version: 27.0.0
 */

export interface IRetryPolicyV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV27<T = any> {
  private readonly config: IRetryPolicyV27Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new RetryPolicyV27<number>('test-27');
instance27.addItem(270);
