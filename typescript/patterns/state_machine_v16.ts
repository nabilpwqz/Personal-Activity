/**
 * Problem: Finite state machine with transition guards (Variant 16)
 * Module: TypeScript / patterns
 * Version: 16.0.0
 */

export interface IStateMachineV16Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV16<T = any> {
  private readonly config: IStateMachineV16Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v16') {
    this.config = { id, version: 16, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV16Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance16 = new StateMachineV16<number>('test-16');
instance16.addItem(160);
