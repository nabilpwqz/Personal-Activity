/**
 * Problem: Fixed-size circular ring buffer queue (Variant 1)
 * Module: TypeScript / generics
 * Version: 1.0.0
 */

export interface IRingBufferV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV1<T = any> {
  private readonly config: IRingBufferV1Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new RingBufferV1<number>('test-1');
instance1.addItem(10);
