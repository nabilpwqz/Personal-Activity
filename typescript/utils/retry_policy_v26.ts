/**
 * Problem: Exponential backoff retry policy handler (Variant 26)
 * Module: TypeScript / utils
 * Version: 26.0.0
 */

export interface IRetryPolicyV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV26<T = any> {
  private readonly config: IRetryPolicyV26Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new RetryPolicyV26<number>('test-26');
instance26.addItem(260);
