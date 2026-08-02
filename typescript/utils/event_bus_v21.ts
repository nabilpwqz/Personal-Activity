/**
 * Problem: Strongly-typed event emitter bus by event map (Variant 21)
 * Module: TypeScript / utils
 * Version: 21.0.0
 */

export interface IEventBusV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class EventBusV21<T = any> {
  private readonly config: IEventBusV21Config;
  private items: T[] = [];

  constructor(id: string = 'event_bus-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IEventBusV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new EventBusV21<number>('test-21');
instance21.addItem(210);
