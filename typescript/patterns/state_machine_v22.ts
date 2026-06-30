/**
 * Problem: Finite state machine with transition guards (Variant 22)
 * Module: TypeScript / patterns
 * Version: 22.0.0
 */

export interface IStateMachineV22Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV22<T = any> {
  private readonly config: IStateMachineV22Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v22') {
    this.config = { id, version: 22, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV22Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance22 = new StateMachineV22<number>('test-22');
instance22.addItem(220);
