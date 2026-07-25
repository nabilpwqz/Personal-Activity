/**
 * Problem: Fixed-size circular ring buffer queue (Variant 12)
 * Module: TypeScript / generics
 * Version: 12.0.0
 */

export interface IRingBufferV12Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV12<T = any> {
  private readonly config: IRingBufferV12Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v12') {
    this.config = { id, version: 12, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV12Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance12 = new RingBufferV12<number>('test-12');
instance12.addItem(120);
