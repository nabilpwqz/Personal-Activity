/**
 * Problem: Fixed-size circular ring buffer queue (Variant 15)
 * Module: TypeScript / generics
 * Version: 15.0.0
 */

export interface IRingBufferV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV15<T = any> {
  private readonly config: IRingBufferV15Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new RingBufferV15<number>('test-15');
instance15.addItem(150);
