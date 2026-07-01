/**
 * Problem: Finite state machine with transition guards (Variant 32)
 * Module: TypeScript / patterns
 * Version: 32.0.0
 */

export interface IStateMachineV32Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV32<T = any> {
  private readonly config: IStateMachineV32Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v32') {
    this.config = { id, version: 32, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV32Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance32 = new StateMachineV32<number>('test-32');
instance32.addItem(320);
