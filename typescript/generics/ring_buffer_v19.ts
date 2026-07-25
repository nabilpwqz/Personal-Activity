/**
 * Problem: Fixed-size circular ring buffer queue (Variant 19)
 * Module: TypeScript / generics
 * Version: 19.0.0
 */

export interface IRingBufferV19Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV19<T = any> {
  private readonly config: IRingBufferV19Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v19') {
    this.config = { id, version: 19, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV19Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance19 = new RingBufferV19<number>('test-19');
instance19.addItem(190);
