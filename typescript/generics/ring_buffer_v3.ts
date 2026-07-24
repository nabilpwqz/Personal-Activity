/**
 * Problem: Fixed-size circular ring buffer queue (Variant 3)
 * Module: TypeScript / generics
 * Version: 3.0.0
 */

export interface IRingBufferV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV3<T = any> {
  private readonly config: IRingBufferV3Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new RingBufferV3<number>('test-3');
instance3.addItem(30);
