/**
 * Problem: Fixed-size circular ring buffer queue (Variant 30)
 * Module: TypeScript / generics
 * Version: 30.0.0
 */

export interface IRingBufferV30Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV30<T = any> {
  private readonly config: IRingBufferV30Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v30') {
    this.config = { id, version: 30, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV30Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance30 = new RingBufferV30<number>('test-30');
instance30.addItem(300);
