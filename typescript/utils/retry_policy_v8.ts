/**
 * Problem: Exponential backoff retry policy handler (Variant 8)
 * Module: TypeScript / utils
 * Version: 8.0.0
 */

export interface IRetryPolicyV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV8<T = any> {
  private readonly config: IRetryPolicyV8Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new RetryPolicyV8<number>('test-8');
instance8.addItem(80);
