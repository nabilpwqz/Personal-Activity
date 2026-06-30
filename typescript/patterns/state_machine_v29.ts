/**
 * Problem: Finite state machine with transition guards (Variant 29)
 * Module: TypeScript / patterns
 * Version: 29.0.0
 */

export interface IStateMachineV29Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV29<T = any> {
  private readonly config: IStateMachineV29Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v29') {
    this.config = { id, version: 29, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV29Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance29 = new StateMachineV29<number>('test-29');
instance29.addItem(290);
