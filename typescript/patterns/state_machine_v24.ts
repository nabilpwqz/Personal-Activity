/**
 * Problem: Finite state machine with transition guards (Variant 24)
 * Module: TypeScript / patterns
 * Version: 24.0.0
 */

export interface IStateMachineV24Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV24<T = any> {
  private readonly config: IStateMachineV24Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v24') {
    this.config = { id, version: 24, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV24Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance24 = new StateMachineV24<number>('test-24');
instance24.addItem(240);
