/**
 * Problem: Strongly-typed event emitter bus by event map (Variant 3)
 * Module: TypeScript / utils
 * Version: 3.0.0
 */

export interface IEventBusV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class EventBusV3<T = any> {
  private readonly config: IEventBusV3Config;
  private items: T[] = [];

  constructor(id: string = 'event_bus-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IEventBusV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new EventBusV3<number>('test-3');
instance3.addItem(30);
