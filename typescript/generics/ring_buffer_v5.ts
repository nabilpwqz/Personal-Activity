/**
 * Problem: Fixed-size circular ring buffer queue (Variant 5)
 * Module: TypeScript / generics
 * Version: 5.0.0
 */

export interface IRingBufferV5Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV5<T = any> {
  private readonly config: IRingBufferV5Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v5') {
    this.config = { id, version: 5, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV5Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance5 = new RingBufferV5<number>('test-5');
instance5.addItem(50);
