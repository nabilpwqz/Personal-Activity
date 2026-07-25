/**
 * Problem: Fixed-size circular ring buffer queue (Variant 22)
 * Module: TypeScript / generics
 * Version: 22.0.0
 */

export interface IRingBufferV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV22<T = any> {
  private readonly config: IRingBufferV22Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new RingBufferV22<number>('test-22');
instance22.addItem(220);
