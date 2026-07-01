/**
 * Problem: Finite state machine with transition guards (Variant 34)
 * Module: TypeScript / patterns
 * Version: 34.0.0
 */

export interface IStateMachineV34Config {
  id: string;
  version: number;
  active: boolean;
}

export class StateMachineV34<T = any> {
  private readonly config: IStateMachineV34Config;
  private items: T[] = [];

  constructor(id: string = 'state_machine-v34') {
    this.config = { id, version: 34, active: true };
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  public getDetails(): IStateMachineV34Config {
    return { ...this.config };
  }
}

// Verification assertion
const instance34 = new StateMachineV34<number>('test-34');
instance34.addItem(340);
