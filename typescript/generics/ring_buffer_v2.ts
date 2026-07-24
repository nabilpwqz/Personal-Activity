/**
 * Problem: Fixed-size circular ring buffer queue (Variant 2)
 * Module: TypeScript / generics
 * Version: 2.0.0
 */

export interface IRingBufferV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV2<T = any> {
  private readonly config: IRingBufferV2Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new RingBufferV2<number>('test-2');
instance2.addItem(20);
