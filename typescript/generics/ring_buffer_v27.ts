/**
 * Problem: Fixed-size circular ring buffer queue (Variant 27)
 * Module: TypeScript / generics
 * Version: 27.0.0
 */

export interface IRingBufferV27Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV27<T = any> {
  private readonly config: IRingBufferV27Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v27') {
    this.config = { id, version: 27, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV27Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance27 = new RingBufferV27<number>('test-27');
instance27.addItem(270);
