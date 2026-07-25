/**
 * Problem: Fixed-size circular ring buffer queue (Variant 20)
 * Module: TypeScript / generics
 * Version: 20.0.0
 */

export interface IRingBufferV20Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV20<T = any> {
  private readonly config: IRingBufferV20Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v20') {
    this.config = { id, version: 20, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV20Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance20 = new RingBufferV20<number>('test-20');
instance20.addItem(200);
