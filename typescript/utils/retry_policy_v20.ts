/**
 * Problem: Exponential backoff retry policy handler (Variant 20)
 * Module: TypeScript / utils
 * Version: 20.0.0
 */

export interface IRetryPolicyV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV20<T = any> {
  private readonly config: IRetryPolicyV20Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new RetryPolicyV20<number>('test-20');
instance20.addItem(200);
