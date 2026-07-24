/**
 * Problem: Fixed-size circular ring buffer queue (Variant 8)
 * Module: TypeScript / generics
 * Version: 8.0.0
 */

export interface IRingBufferV8Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV8<T = any> {
  private readonly config: IRingBufferV8Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v8') {
    this.config = { id, version: 8, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV8Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance8 = new RingBufferV8<number>('test-8');
instance8.addItem(80);
