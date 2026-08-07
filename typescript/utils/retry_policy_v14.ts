/**
 * Problem: Exponential backoff retry policy handler (Variant 14)
 * Module: TypeScript / utils
 * Version: 14.0.0
 */

export interface IRetryPolicyV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV14<T = any> {
  private readonly config: IRetryPolicyV14Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new RetryPolicyV14<number>('test-14');
instance14.addItem(140);
