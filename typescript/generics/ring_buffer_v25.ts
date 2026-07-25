/**
 * Problem: Fixed-size circular ring buffer queue (Variant 25)
 * Module: TypeScript / generics
 * Version: 25.0.0
 */

export interface IRingBufferV25Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV25<T = any> {
  private readonly config: IRingBufferV25Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v25') {
    this.config = { id, version: 25, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV25Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance25 = new RingBufferV25<number>('test-25');
instance25.addItem(250);
