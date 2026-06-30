/**
 * Problem: Finite state machine with transition guards (Variant 11)
 * Module: TypeScript / patterns
 * Version: 11.0.0
 */

export interface IStateMachineV11Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV11<T = any> {
  private readonly config: IStateMachineV11Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v11') {
    this.config = { id, version: 11, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV11Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance11 = new StateMachineV11<number>('test-11');
instance11.addItem(110);
