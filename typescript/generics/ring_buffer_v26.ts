/**
 * Problem: Fixed-size circular ring buffer queue (Variant 26)
 * Module: TypeScript / generics
 * Version: 26.0.0
 */

export interface IRingBufferV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV26<T = any> {
  private readonly config: IRingBufferV26Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new RingBufferV26<number>('test-26');
instance26.addItem(260);
