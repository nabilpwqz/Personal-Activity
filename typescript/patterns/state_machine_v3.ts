/**
 * Problem: Finite state machine with transition guards (Variant 3)
 * Module: TypeScript / patterns
 * Version: 3.0.0
 */

export interface IStateMachineV3Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV3<T = any> {
  private readonly config: IStateMachineV3Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v3') {
    this.config = { id, version: 3, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV3Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance3 = new StateMachineV3<number>('test-3');
instance3.addItem(30);
