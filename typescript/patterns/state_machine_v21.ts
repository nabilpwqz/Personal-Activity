/**
 * Problem: Finite state machine with transition guards (Variant 21)
 * Module: TypeScript / patterns
 * Version: 21.0.0
 */

export interface IStateMachineV21Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV21<T = any> {
  private readonly config: IStateMachineV21Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v21') {
    this.config = { id, version: 21, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV21Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance21 = new StateMachineV21<number>('test-21');
instance21.addItem(210);
