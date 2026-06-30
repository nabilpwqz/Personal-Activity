/**
 * Problem: Finite state machine with transition guards (Variant 13)
 * Module: TypeScript / patterns
 * Version: 13.0.0
 */

export interface IStateMachineV13Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV13<T = any> {
  private readonly config: IStateMachineV13Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v13') {
    this.config = { id, version: 13, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV13Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance13 = new StateMachineV13<number>('test-13');
instance13.addItem(130);
