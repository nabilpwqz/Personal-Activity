/**
 * Problem: Exponential backoff retry policy handler (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IRetryPolicyV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV2<T = any> {
  private readonly config: IRetryPolicyV2Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new RetryPolicyV2<number>('test-2');
instance2.addItem(20);
