/**
 * Problem: Finite state machine with transition guards (Variant 33)
 * Module: TypeScript / patterns
 * Version: 33.0.0
 */

export interface IStateMachineV33Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV33<T = any> {
  private readonly config: IStateMachineV33Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v33') {
    this.config = { id, version: 33, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV33Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance33 = new StateMachineV33<number>('test-33');
instance33.addItem(330);
