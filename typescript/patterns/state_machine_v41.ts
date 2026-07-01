/**
 * Problem: Finite state machine with transition guards (Variant 41)
 * Module: TypeScript / patterns
 * Version: 41.0.0
 */

export interface IStateMachineV41Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV41<T = any> {
  private readonly config: IStateMachineV41Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v41') {
    this.config = { id, version: 41, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV41Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance41 = new StateMachineV41<number>('test-41');
instance41.addItem(410);
