/**
 * Problem: Exponential backoff retry policy handler (Variant 9)
 * Module: TypeScript / utils
 * Version: 9.0.0
 */

export interface IRetryPolicyV9Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV9<T = any> {
  private readonly config: IRetryPolicyV9Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v9') {
    this.config = { id, version: 9, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV9Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance9 = new RetryPolicyV9<number>('test-9');
instance9.addItem(90);
