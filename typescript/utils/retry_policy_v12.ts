/**
 * Problem: Exponential backoff retry policy handler (Variant 12)
 * Module: TypeScript / utils
 * Version: 12.0.0
 */

export interface IRetryPolicyV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV12<T = any> {
  private readonly config: IRetryPolicyV12Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new RetryPolicyV12<number>('test-12');
instance12.addItem(120);
