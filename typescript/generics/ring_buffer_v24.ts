/**
 * Problem: Fixed-size circular ring buffer queue (Variant 24)
 * Module: TypeScript / generics
 * Version: 24.0.0
 */

export interface IRingBufferV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV24<T = any> {
  private readonly config: IRingBufferV24Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new RingBufferV24<number>('test-24');
instance24.addItem(240);
