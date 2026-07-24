/**
 * Problem: Fixed-size circular ring buffer queue (Variant 4)
 * Module: TypeScript / generics
 * Version: 4.0.0
 */

export interface IRingBufferV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV4<T = any> {
  private readonly config: IRingBufferV4Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new RingBufferV4<number>('test-4');
instance4.addItem(40);
