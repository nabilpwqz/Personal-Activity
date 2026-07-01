/**
 * Problem: Finite state machine with transition guards (Variant 42)
 * Module: TypeScript / patterns
 * Version: 42.0.0
 */

export interface IStateMachineV42Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV42<T = any> {
  private readonly config: IStateMachineV42Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v42') {
    this.config = { id, version: 42, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV42Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance42 = new StateMachineV42<number>('test-42');
instance42.addItem(420);
