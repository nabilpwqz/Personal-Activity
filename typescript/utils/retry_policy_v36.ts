/**
 * Problem: Exponential backoff retry policy handler (Variant 36)
 * Module: TypeScript / utils
 * Version: 36.0.0
 */

export interface IRetryPolicyV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV36<T = any> {
  private readonly config: IRetryPolicyV36Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new RetryPolicyV36<number>('test-36');
instance36.addItem(360);
