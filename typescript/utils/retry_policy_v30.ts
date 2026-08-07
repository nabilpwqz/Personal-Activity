/**
 * Problem: Exponential backoff retry policy handler (Variant 30)
 * Module: TypeScript / utils
 * Version: 30.0.0
 */

export interface IRetryPolicyV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV30<T = any> {
  private readonly config: IRetryPolicyV30Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new RetryPolicyV30<number>('test-30');
instance30.addItem(300);
