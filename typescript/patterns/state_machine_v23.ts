/**
 * Problem: Finite state machine with transition guards (Variant 23)
 * Module: TypeScript / patterns
 * Version: 23.0.0
 */

export interface IStateMachineV23Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV23<T = any> {
  private readonly config: IStateMachineV23Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v23') {
    this.config = { id, version: 23, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV23Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance23 = new StateMachineV23<number>('test-23');
instance23.addItem(230);
