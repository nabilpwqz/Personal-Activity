/**
 * Problem: Fixed-size circular ring buffer queue (Variant 41)
 * Module: TypeScript / generics
 * Version: 41.0.0
 */

export interface IRingBufferV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV41<T = any> {
  private readonly config: IRingBufferV41Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new RingBufferV41<number>('test-41');
instance41.addItem(410);
