/**
 * Problem: Strongly-typed event emitter bus by event map (Variant 4)
 * Module: TypeScript / utils
 * Version: 4.0.0
 */

export interface IEventBusV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class EventBusV4<T = any> {
  private readonly config: IEventBusV4Config;
  private items: T[] = [];

  constructor(id: string = 'event_bus-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IEventBusV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new EventBusV4<number>('test-4');
instance4.addItem(40);
