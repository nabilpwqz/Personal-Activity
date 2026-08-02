/**
 * Problem: Strongly-typed event emitter bus by event map (Variant 2)
 * Module: TypeScript / utils
 * Version: 2.0.0
 */

export interface IEventBusV2Config {
  id: string;
  version: number;
  active: boolean;
}

export class EventBusV2<T = any> {
  private readonly config: IEventBusV2Config;
  private items: T[] = [];

  constructor(id: string = 'event_bus-v2') {
    this.config = { id, version: 2, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IEventBusV2Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance2 = new EventBusV2<number>('test-2');
instance2.addItem(20);
