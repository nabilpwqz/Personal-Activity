/**
 * Problem: Fixed-size circular ring buffer queue (Variant 21)
 * Module: TypeScript / generics
 * Version: 21.0.0
 */

export interface IRingBufferV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV21<T = any> {
  private readonly config: IRingBufferV21Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new RingBufferV21<number>('test-21');
instance21.addItem(210);
