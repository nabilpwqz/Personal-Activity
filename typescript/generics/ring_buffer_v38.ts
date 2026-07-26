/**
 * Problem: Fixed-size circular ring buffer queue (Variant 38)
 * Module: TypeScript / generics
 * Version: 38.0.0
 */

export interface IRingBufferV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV38<T = any> {
  private readonly config: IRingBufferV38Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new RingBufferV38<number>('test-38');
instance38.addItem(380);
