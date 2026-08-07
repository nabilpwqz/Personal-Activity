/**
 * Problem: Exponential backoff retry policy handler (Variant 21)
 * Module: TypeScript / utils
 * Version: 21.0.0
 */

export interface IRetryPolicyV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV21<T = any> {
  private readonly config: IRetryPolicyV21Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new RetryPolicyV21<number>('test-21');
instance21.addItem(210);
