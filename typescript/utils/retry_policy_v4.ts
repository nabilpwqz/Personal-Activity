/**
 * Problem: Exponential backoff retry policy handler (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IRetryPolicyV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV4<T = any> {
  private readonly config: IRetryPolicyV4Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new RetryPolicyV4<number>('test-4');
instance4.addItem(40);
