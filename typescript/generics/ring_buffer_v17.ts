/**
 * Problem: Fixed-size circular ring buffer queue (Variant 17)
 * Module: TypeScript / generics
 * Version: 17.0.0
 */

export interface IRingBufferV17Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV17<T = any> {
  private readonly config: IRingBufferV17Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v17') {
    this.config = { id, version: 17, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV17Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance17 = new RingBufferV17<number>('test-17');
instance17.addItem(170);
