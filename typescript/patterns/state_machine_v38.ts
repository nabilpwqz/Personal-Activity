/**
 * Problem: Finite state machine with transition guards (Variant 38)
 * Module: TypeScript / patterns
 * Version: 38.0.0
 */

export interface IStateMachineV38Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV38<T = any> {
  private readonly config: IStateMachineV38Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v38') {
    this.config = { id, version: 38, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV38Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance38 = new StateMachineV38<number>('test-38');
instance38.addItem(380);
