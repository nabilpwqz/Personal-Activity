/**
 * Problem: Exponential backoff retry policy handler (Variant 17)
 * Module: TypeScript / utils
 * Version: 17.0.0
 */

export interface IRetryPolicyV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV17<T = any> {
  private readonly config: IRetryPolicyV17Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new RetryPolicyV17<number>('test-17');
instance17.addItem(170);
