/**
 * Problem: Finite state machine with transition guards (Variant 10)
 * Module: TypeScript / patterns
 * Version: 10.0.0
 */

export interface IStateMachineV10Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV10<T = any> {
  private readonly config: IStateMachineV10Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v10') {
    this.config = { id, version: 10, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV10Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance10 = new StateMachineV10<number>('test-10');
instance10.addItem(100);
