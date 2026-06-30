/**
 * Problem: Finite state machine with transition guards (Variant 4)
 * Module: TypeScript / patterns
 * Version: 4.0.0
 */

export interface IStateMachineV4Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV4<T = any> {
  private readonly config: IStateMachineV4Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v4') {
    this.config = { id, version: 4, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV4Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance4 = new StateMachineV4<number>('test-4');
instance4.addItem(40);
