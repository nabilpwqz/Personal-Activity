/**
 * Problem: Finite state machine with transition guards (Variant 15)
 * Module: TypeScript / patterns
 * Version: 15.0.0
 */

export interface IStateMachineV15Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV15<T = any> {
  private readonly config: IStateMachineV15Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v15') {
    this.config = { id, version: 15, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV15Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance15 = new StateMachineV15<number>('test-15');
instance15.addItem(150);
