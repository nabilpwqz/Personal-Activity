/**
 * Problem: Fixed-size circular ring buffer queue (Variant 6)
 * Module: TypeScript / generics
 * Version: 6.0.0
 */

export interface IRingBufferV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV6<T = any> {
  private readonly config: IRingBufferV6Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new RingBufferV6<number>('test-6');
instance6.addItem(60);
