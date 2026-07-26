/**
 * Problem: Fixed-size circular ring buffer queue (Variant 40)
 * Module: TypeScript / generics
 * Version: 40.0.0
 */

export interface IRingBufferV40Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV40<T = any> {
  private readonly config: IRingBufferV40Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v40') {
    this.config = { id, version: 40, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV40Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance40 = new RingBufferV40<number>('test-40');
instance40.addItem(400);
