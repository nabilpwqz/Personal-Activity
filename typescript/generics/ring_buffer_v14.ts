/**
 * Problem: Fixed-size circular ring buffer queue (Variant 14)
 * Module: TypeScript / generics
 * Version: 14.0.0
 */

export interface IRingBufferV14Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV14<T = any> {
  private readonly config: IRingBufferV14Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v14') {
    this.config = { id, version: 14, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV14Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance14 = new RingBufferV14<number>('test-14');
instance14.addItem(140);
