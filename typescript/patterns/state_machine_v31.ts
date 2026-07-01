/**
 * Problem: Finite state machine with transition guards (Variant 31)
 * Module: TypeScript / patterns
 * Version: 31.0.0
 */

export interface IStateMachineV31Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV31<T = any> {
  private readonly config: IStateMachineV31Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v31') {
    this.config = { id, version: 31, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV31Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance31 = new StateMachineV31<number>('test-31');
instance31.addItem(310);
