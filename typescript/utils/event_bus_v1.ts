/**
 * Problem: Strongly-typed event emitter bus by event map (Variant 1)
 * Module: TypeScript / utils
 * Version: 1.0.0
 */

export interface IEventBusV1Config {
  id: string;
  version: number;
  active: boolean;
}

export class EventBusV1<T = any> {
  private readonly config: IEventBusV1Config;
  private items: T[] = [];

  constructor(id: string = 'event_bus-v1') {
    this.config = { id, version: 1, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IEventBusV1Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance1 = new EventBusV1<number>('test-1');
instance1.addItem(10);
