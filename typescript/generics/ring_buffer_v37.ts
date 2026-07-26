/**
 * Problem: Fixed-size circular ring buffer queue (Variant 37)
 * Module: TypeScript / generics
 * Version: 37.0.0
 */

export interface IRingBufferV37Config {
  id: string;
  version: number;
  active: boolean;
}

export class RingBufferV37<T = any> {
  private readonly config: IRingBufferV37Config;
  private items: T[] = [];

  constructor(id: string = 'ring_buffer-v37') {
    this.config = { id, version: 37, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IRingBufferV37Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance37 = new RingBufferV37<number>('test-37');
instance37.addItem(370);
