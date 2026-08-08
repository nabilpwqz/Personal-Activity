/**
 * Problem: Exponential backoff retry policy handler (Variant 40)
 * Module: TypeScript / utils
 * Version: 40.0.0
 */

export interface IRetryPolicyV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class RetryPolicyV40<T = any> {
  private readonly config: IRetryPolicyV40Config;
  private items: T[] = [];

  constructor(id: string = 'retry_policy-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRetryPolicyV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new RetryPolicyV40<number>('test-40');
instance40.addItem(400);
