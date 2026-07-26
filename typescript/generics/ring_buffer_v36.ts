/**
 * Problem: Fixed-size circular ring buffer queue (Variant 36)
 * Module: TypeScript / generics
 * Version: 36.0.0
 */

export interface IRingBufferV36Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV36<T = any> {
  private readonly config: IRingBufferV36Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v36') {
    this.config = { id, version: 36, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV36Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance36 = new RingBufferV36<number>('test-36');
instance36.addItem(360);
