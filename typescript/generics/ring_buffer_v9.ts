/**
 * Problem: Fixed-size circular ring buffer queue (Variant 9)
 * Module: TypeScript / generics
 * Version: 9.0.0
 */

export interface IRingBufferV9Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV9<T = any> {
  private readonly config: IRingBufferV9Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v9') {
    this.config = { id, version: 9, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV9Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance9 = new RingBufferV9<number>('test-9');
instance9.addItem(90);
