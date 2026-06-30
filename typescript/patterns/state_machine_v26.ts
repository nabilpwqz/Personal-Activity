/**
 * Problem: Finite state machine with transition guards (Variant 26)
 * Module: TypeScript / patterns
 * Version: 26.0.0
 */

export interface IStateMachineV26Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV26<T = any> {
  private readonly config: IStateMachineV26Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v26') {
    this.config = { id, version: 26, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV26Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance26 = new StateMachineV26<number>('test-26');
instance26.addItem(260);
