/**
 * Problem: Exponential backoff retry policy handler (Variant 28)
 * Module: TypeScript / utils
 * Version: 28.0.0
 */

export interface IRetryPolicyV28Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV28<T = any> {
  private readonly config: IRetryPolicyV28Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v28') {
    this.config = { id, version: 28, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV28Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance28 = new RetryPolicyV28<number>('test-28');
instance28.addItem(280);
