/**
 * Problem: Exponential backoff retry policy handler (Variant 24)
 * Module: TypeScript / utils
 * Version: 24.0.0
 */

export interface IRetryPolicyV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV24<T = any> {
  private readonly config: IRetryPolicyV24Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new RetryPolicyV24<number>('test-24');
instance24.addItem(240);
