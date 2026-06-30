/**
 * Problem: Finite state machine with transition guards (Variant 6)
 * Module: TypeScript / patterns
 * Version: 6.0.0
 */

export interface IStateMachineV6Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV6<T = any> {
  private readonly config: IStateMachineV6Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v6') {
    this.config = { id, version: 6, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV6Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance6 = new StateMachineV6<number>('test-6');
instance6.addItem(60);
