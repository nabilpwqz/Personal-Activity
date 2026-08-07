/**
 * Problem: Exponential backoff retry policy handler (Variant 23)
 * Module: TypeScript / utils
 * Version: 23.0.0
 */

export interface IRetryPolicyV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV23<T = any> {
  private readonly config: IRetryPolicyV23Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new RetryPolicyV23<number>('test-23');
instance23.addItem(230);
